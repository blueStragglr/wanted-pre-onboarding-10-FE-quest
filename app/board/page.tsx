const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Board = async () => {
  const posts = await getPosts();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts Board</h1>
      {posts.map((post: IPost) => {
        return (
          <div key={post.id}>
            <h2>
              {post.title} - {post.id}
            </h2>
            <p>{post.body}</p>
            <span>userId : {post.userId}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
