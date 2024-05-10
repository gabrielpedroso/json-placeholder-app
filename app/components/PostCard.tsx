const PostCard = (props: { title: string, body: string }) => {
  return (
    <>
      <h1>Post Card</h1>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </>
  );
}

export default PostCard;
