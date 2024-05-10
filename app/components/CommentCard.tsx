const CommentCard = (props: { name: string, email: string, body: string }) => {
  return (
    <>
      <h1>Comment Card</h1>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.body}</p>
    </>
  );
}

export default CommentCard;
