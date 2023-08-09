import { getDictionary } from "@/lib/getDictionary";
import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostContent from "./post-content";

export interface PostProps {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
  locale:string;
}
const PostCard = ({
  post,
  layout = "horizontal",
  reverse = false,
  locale,
}: PostProps) => {
  return (
    <Link
      className={`@container
      ${
        layout === "horizontal"
          ? "grid  grid-cols-1 md:grid-cols-2 gap-10 items-center"
          : "space-y-10"
      }`}
      href={`/${locale}/post/${post.slug}`}
    >
      <Image
        className={`rounded-md w-full object-cover object-center h-full max-h-[300px] ${
          reverse ? "order-last" : ""
        }`}
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}`}
        width={600}
        height={300}
        alt={post.title}
      />
       {/* @ts-expect-error  Async Server Component */}
      <PostContent locale={locale} post={post} />
    </Link>
  );
};

export default PostCard;
