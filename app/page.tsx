import PostCard from "./components/PostCard/PostCard";
import CommentCard from "./components/CommentCard/CommentCard";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface SocialNetwork {
  post: Post;
  comments: Comment[];
}

export default async function Home () {
  const response = await fetch('http://localhost:3001/post/1');
  const socialNetwork: SocialNetwork = await response.json();

  return (
    <main>
      <h1 className="text-xl font-bold px-4">Post</h1>
      <div className="p-4 border-b">
        <PostCard 
          title={socialNetwork.post.title} 
          body={socialNetwork.post.body } 
        />
      </div>
      <div className="my-12">
        {socialNetwork.comments.map(
          comment => 
            <CommentCard
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body} />
        )}
      </div>
    </main>
  );
}
