const CommentCard = (props: { name: string, email: string, body: string }) => {
  return (
    <>
      <div className="p-4 border-t">
        <div className="flex items-center pb-4 gap-2 text-base">
          <p>{props.name}</p>
          <p className="text-gray-500">{props.email}</p>
        </div>
        <p className="text-sm">{props.body}</p>
      </div>
    </>
  );
}

export default CommentCard;
