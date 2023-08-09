import React from "react";
import { Post } from "@/types/collection";
import PostCard from "./post-card";

export interface PostListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
  locale:string;
}
function PostList({ posts, layout = "vertical",locale }: PostListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr gap-10">

      {posts.map((post) => (
        <PostCard locale={locale} layout={layout} post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
