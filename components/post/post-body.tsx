import React from "react";
// import parse from "html-react-parser";
import parse, { Element, HTMLReactParserOptions } from "html-react-parser";
import Image from "next/image";

const PostBody = ({ body }: { body: string }) => {
  // const options: HTMLReactParserOptions = {
  //   replace: (domNode) => {
  //     if (domNode instanceof Element && domNode.attribs) {
  //       if (domNode.name === "img") {
  //         const { src, alt } = domNode.attribs;
  //         return (
  //           <Image
  //             className="rounded-md w-full object-cover object-center my-3 h-auto max-h-[300px] md:max-h-[450px]"
  //             src={src}
  //             alt={alt}
  //             width={1200}
  //             height={620}
  //           />
  //         );
  //       }
  //     }
  //   },
  // };
  const options = {
    replace: (domNode:any) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === "img") {
          const { src, alt } = domNode.attribs;
          return (
            <Image
              className="rounded-md w-full object-cover object-center my-3 h-auto max-h-[300px] md:max-h-[450px]"
              src={src}
              alt={alt}
              width={1200}
              height={620}
            />
          );
        }
      }
    },
  };

  const getParseHTML = (body: string) => {
    return parse(body, options);
  };
  return <div className="rich-text">{getParseHTML(body)}</div>;
};

export default PostBody;
