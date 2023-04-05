import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// npm i date-fns
import axios from 'axios';
import { sub } from 'date-fns';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

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
    // console.log(initialPost);
    try {
      const { data } = await axios.post(POSTS_URL, initialPost);
      // initialPost = body ⤴

      console.log(initialPost, data);

      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue('Somethign went wrong');
    }
  }
);

const initialState = {
  posts: [],
  status: 'idle', //idle || loading || succeed || failed
  error: null,
};
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
      const findedPost = state.posts.find(post => post.id === idPost);
      findedPost ? findedPost.reactions[reaction]++ : null;
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

        state.posts = state.posts.concat(loadedPosts);
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
        state.posts.push(action.payload);
      });
  },
});

// writing like this because we want it change automaticly in all compoennts where this selector used, when in initialstate its name changes
//  state.(dot) name must be equal to in store reducer name we defined
export const selectAllPosts = state => state.postsSlice.posts;
export const selecPostsStatus = state => state.postsSlice.status;
export const selectErrorState = state => state.postsSlice.error;

export const { addPost, reactionToPost } = postsSlice.actions;

export default postsSlice.reducer;
