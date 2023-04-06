import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
// npm i date-fns
import axios from 'axios';
import { sub } from 'date-fns';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState({
  // posts: [],
  status: 'idle', //idle || loading || succeed || failed
  error: null,
  count: 0,
});
// {
//   postId: '1',
//   title: 'Learning Redux Toolkit',
//   content: 'firts',
//   date: sub(new Date(), { minutes: 10 }).toISOString(),
//   reactions: {
//     thumbsUp: 0,
//     wow: 0,
//     heart: 0,
//     rocket: 0,
//     coffee: 0,
//   },
// },
// {
//   postId: '2',
//   title: 'Slices...',
//   content: 'second',
//   date: sub(new Date(), { minutes: 5 }).toISOString(),
//   reactions: {
//     thumbsUp: 0,
//     wow: 0,
//     heart: 0,
//     rocket: 0,
//     coffee: 0,
//   },
// },

export const fetchingPosts = createAsyncThunk(
  'posts/fetchingPosts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(POSTS_URL);

      // console.log(data);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue('Somethign went wrong');
    }
  }
);

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async initialPost => {
    // this is action payload of reducer and in addcase action.payload is initialPost

    try {
      const { data } = await axios.post(POSTS_URL, initialPost);
      // initialPost = post ⤴

      // console.log(initialPost, data);

      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue('Somethign went wrong');
    }
  }
);
export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async initialPost => {
    // this is action payload of reducer and in addcase action.payload is initialPost

    const { id } = initialPost;
    try {
      const { data } = await axios.put(`${POSTS_URL}/${id}`, initialPost);
      // initialPost = update ⤴

      // console.log(initialPost, data);

      return data;
    } catch (e) {
      // console.log(e.message);
      // return thunkAPI.rejectWithValue('Somethign went wrong');
      return initialPost;
      // beacause we can't update created post
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async initialPost => {
    // this is action payload of reducer and in addcase action.payload is initialPost

    const { id } = initialPost;
    try {
      const response = await axios.delete(`${POSTS_URL}/${id}`);
      if (response?.status === 200) return initialPost;
      return `${response?.status}: ${response?.statusText}`;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // addPost: {
    //   // it is reducer of addPost
    //   reducer(state, action) {
    //     console.log(action);
    //     state.posts.push(action.payload);
    //   },

    //   // it acst like action.payload ⤵
    //   prepare(title, content, userId) {
    //     // console.log(title, content, userId);
    //     return {
    //       payload: {
    //         postId: nanoid(),
    //         title,
    //         content,
    //         date: new Date().toISOString(),
    //         userId: userId,
    //         reactions: {
    //           thumbsUp: 0,
    //           wow: 0,
    //           heart: 0,
    //           rocket: 0,
    //           coffee: 0,
    //         },
    //       },
    //     };
    //   },
    // },
    reactionToPost: (state, { payload }) => {
      const { idPost, reaction } = payload;
      // const findedPost = state.posts.find(post => post.id === idPost);
      const findedPost = state.entities[idPost];
      // entities is object which is our initialState and  and we find with idPost

      findedPost ? findedPost.reactions[reaction]++ : null;
    },
    increaseCount: (state, action) => {
      state.count++;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchingPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchingPosts.fulfilled, (state, action) => {
        state.status = 'fulfilled';

        let min = 1;
        const loadedPosts = action.payload.map(post => {
          // console.log(post);
          post.date = sub(new Date(), { minutes: min++ })
            // we do this like each post after 1 min posted
            .toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          // we add to each post date and reactions ↖

          return post;
        });

        // state.posts = state.posts.concat(loadedPosts);
        postsAdapter.upsertMany(state, loadedPosts);
      })
      .addCase(fetchingPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // Fix for API post IDs:
        // Creating sortedPosts & assigning the id
        // would be not be needed if the fake API
        // returned accurate new post IDs
        const sortedPosts = state.posts.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
        action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
        // End fix for fake API post IDs

        // action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        // action.payload.animal = 'createure';

        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        console.log(action.payload);
        // state.posts.push(action.payload);

        postsAdapter.addOne(state, action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload.id) {
          console.log('didn"t updated');
          console.log(action.payload);
          return;
        }
        action.payload.date = new Date().toISOString();
        // const posts = state.posts.filter(post => post.id !== action.payload.id);
        // state.posts = [...posts, action.payload];

        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Delete could not complete');
          console.log(action.payload);
          return;
        }
        const { id } = action.payload;
        // const posts = state.posts.filter(post => post.id !== id);
        // state.posts = posts;
        postsAdapter.removeOne(state, id);
      });
  },
});

// writing like this because we want it change automaticly in all compoennts where this selector used, when in initialstate its name changes
//  state.(dot) name must be equal to in store reducer name we defined

// export const selectAllPosts = state => state.postsSlice.posts;

export const {
  // selectAll, selectIds, selectById are key words of getSelectors and they are functions
  selectAll: selectAllPosts,
  selectIds: selectPostsIds,
  selectById: selectPostById,
} = postsAdapter.getSelectors(state => state.postsSlice);

export const selecPostsStatus = state => state.postsSlice.status;
export const selectErrorState = state => state.postsSlice.error;
export const selectCount = state => state.postsSlice.count;

// export const selectPostById = (state, postId) =>
// state.postsSlice.posts.find(post => post.id === postId);

export const selectPostsOfAuthor = createSelector(
  [selectAllPosts, (state, userId) => userId],
  // dependencies which means when posts or userId changes

  (posts, userId) => posts.filter(post => post.userId === userId)
  // posts is return of selectAllPosts
  // userId is return of second argument
);

export const { addPost, reactionToPost, increaseCount } = postsSlice.actions;

export default postsSlice.reducer;
