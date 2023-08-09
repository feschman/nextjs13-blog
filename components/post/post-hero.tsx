import { Post } from "@/types/collection";
import Image from "next/image";
import React from "react";
import PostContent from "./post-content";
export interface PostHeroProps {
  post: Post;
  locale:string;
}
const PostHero = ({ post,locale }: PostHeroProps) => {
  return (
    <div>
        {/* @ts-expect-error  Async Server Component */}
      <PostContent locale={locale} isPostPage={true} post={post} />
      <Image
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}`}
        alt={post.title}
        width={1200}
        height={500}
      />
    </div>
  );
};

export default PostHero;
