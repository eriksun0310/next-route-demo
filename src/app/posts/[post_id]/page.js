// http://localhost:3000/posts/1

export function generateMetadata({params}) {
  return {
    title: `Posts ${params.post_id}`,
    description: "Post Test",
  };
}

const Post = ({ params }) => {
  // params.post_id 會跟資料夾命名有關
  const post_id = params.post_id;
  return <div>Post {post_id}</div>;
};

export default Post;
