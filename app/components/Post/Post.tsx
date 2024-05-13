import Image from "next/image";
import style from './Post.module.css';

const Post = (props: { title: string, body: string, profileImg?: string }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.container_head}>
          <Image 
            src={props.profileImg ? props.profileImg : '/profile.png'}
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <span className={style.container_head_title}>{props.title}</span>
        </div>
        <span className={style.container_body}>{props.body}</span>
      </div>
    </>
  );
}

export default Post;
