import Image from "next/image";

const PostCard = (props: { title: string, body: string, profileImg?: string }) => {
  return (
    <>
      <div className="p-4">
        <div className="flex items-center pb-4 gap-2">
          <Image
            src={props.profileImg ? props.profileImg : '/profile.png'}
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <p className="text-base">{props.title}</p>
        </div>
        <p className="text-sm">{props.body}</p>
      </div>
    </>
  );
}

export default PostCard;
