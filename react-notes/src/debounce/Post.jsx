const Post = ({ posts }) => {
  // const { id, title, body } = post;
  // console.log(posts);

  return (
    <div>
      {posts?.map(post => {
        const { id, title, body } = post;
        return (
          <div key={id} style={{ border: '2px solid white' }}>
            <h2>
              {id} {title}
            </h2>
            <p> {body} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
