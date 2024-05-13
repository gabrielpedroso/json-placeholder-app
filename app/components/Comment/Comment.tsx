import style from './Comment.module.css';

const Comment = (props: { name: string, email: string, body: string }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.container_header}>
          <span>{props.name}</span>
          <span className={style.container_header_email}>{props.email}</span>
        </div>
        <span className={style.container_body}>{props.body}</span>
      </div>
    </>
  );
}

export default Comment;
