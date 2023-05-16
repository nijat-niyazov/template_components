import { forwardRef } from 'react';

const Post = ({ post }, ref) => {
  return (
    <div
      ref={ref && ref}
      key={post.id}
      className={`w-[90%] text-justify mb-[20px] m-auto p-4 border-black border-[2px] rounded-xl ${
        ref && 'bg-red-300'
      }`}
    >
      <h3 className="font-bold italic capitalize">{post.title}</h3>
      <h4>{post.body}</h4>

      <div className="w-min whitespace-nowrap ml-auto rounded-md  p-2 bg-lime-300">
        <p className="">Written by {post.id}</p>
      </div>
    </div>
  );
};

export default forwardRef(Post);
