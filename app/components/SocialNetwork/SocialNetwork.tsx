'use client';
import { useEffect, useState } from "react";

import CommentCard from "../CommentCard/CommentCard";
import PostCard from "../PostCard/PostCard";
import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";

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

export default function SocialNetwork() {
  const [socialNetwork, setSocialNetWork] = useState<SocialNetwork | null>(null);
  const initialPost = 1;

  useEffect(() => {
    fetchPost(initialPost);
  }, []);

  async function fetchPost(id: number = 1) {
    const response = await fetch(`http://localhost:3001/post/${id}`);
    const data: SocialNetwork = await response.json();
    setSocialNetWork(data);
  }

  return (
    <>
      <div className="flex flex-col gap-4 mx-4">
        <SearchBar onSearch={fetchPost} />
        <Title text="Post"/>
      </div>
      
      {socialNetwork?.post && (
        <>
          <PostCard 
            title={socialNetwork.post.title}
            body={socialNetwork.post.body}
          />

          {socialNetwork.comments.map(
            comment => 
              <CommentCard
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body} />
          )}
        </>
      )}

      {!socialNetwork?.post && (
        <>
          <span className="self-center mt-16">Post não encontrado.</span>
        </>
      )}
    </>
  )
}