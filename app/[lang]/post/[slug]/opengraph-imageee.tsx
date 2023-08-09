import { getReadingTime, getRelativeDate } from "@/lib/helpers";
import { ImageResponse } from "next/server";
import {getPostData} from "./page"

export const size={
  width:1102,
  height:630,
};
export const alt = "Explorer | Blog";
export const contentType = "image/png";

export default async function og({
  params:{slug, lang},
}:{
  params:{slug:string; lang:string};
}){

  const post = await getPostData (slug, lang);
  return new ImageResponse((

   <div tw="relative flex w-full items-center justify-center">
      {/* Background */}
      <div tw="absolute flex inset-0">
        <img
        tw="flex flex-1 object-cover w-full h-full object-center"
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}`}
        alt={post?.title!!}
        />
        {/** Overlay */}
        <div tw="absolute flex inset-0 bg-black bg-opacity-50"/>
      </div>
      <div tw="flex flex-col text-neutral-50">
        {/**Title */}
        <div tw="text-[70px]">{post?.title}</div>
        {/**Description */}
        <div tw="text-2xl max-w-4xl">{post?.description}</div>
        {/**Tags */}
        <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
          <div tw={`font-medium ${
            post?.category.title ==="Cities"
            ? "text-emerald-600"
            : "text-indigo-600"
          }`}
          >
            {post?.category.title}
            </div>
            <div tw="w-4 h-4 rounded-full bg-neutral-300" />
            <div>{getReadingTime(post?.body!!, lang)}</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div>{getRelativeDate (post?.date.created!!,lang)}</div>
        </div>
      </div>
    </div>
  ))
}
