import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { fetchPosts, fetchPostsById } from './api';

const WebDev = () => {
  const [post, setPost] = useState('');

  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const {
    data: findedPost,
    isLoading: loadedPost,
    error: errorPost,
  } = useQuery({
    queryKey: ['posts', id],
    queryFn: ({ queryKey }) => {
      console.log(queryKey);
      return fetchPostsById(posts[0].id);
    },
  });

  const addNewPostMutation = useMutation({
    mutationFn: date => {
      console.log(date);
      // addPost(date);
    },
    onSuccess: () => {
      // if our data has changed succesfuly
      queryClient.invalidateQueries(['posts']);
    },
  });

  // console.log(data);

  return (
    <div className="p-2 flex flex-col gap-4 ">
      <h1>Tan Stack Query</h1>

      {isLoading && <h2>lOADING...</h2>}
      {error && <h2>{error.message}.</h2>}

      {posts &&
        posts.map(post => (
          <article
            className="border-black border-2 p-2 rounded-lg bg-yellow-200"
            key={post.id}
          >
            <h2>{post.title}</h2>
            {/* <span>{post.body}</span>
          <p>{post.id}</p> */}
          </article>
        ))}
    </div>
  );
};

export default WebDev;

{
  /* <form
action=""
className="flex flex-col gap-3 items-center justify-between"
>
<label htmlFor="post">New Post</label>
<input
  type="text"
  className="border-2 border-black p-2 rounded-lg block"
  id="post"
  value={post}
  onChange={e => setPost(e.target.value)}
/>

<button
  onClick={() =>
    addNewPostMutation.mutate({
      id: new Date(),
      title: post,
    })
  }
  className="bg-green-300 p-2 rounded-lg w-1/2 m-auto"
>
  Add Post
</button>
      </form>
 */
}
