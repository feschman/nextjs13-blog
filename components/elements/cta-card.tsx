'use client'
import directus from "@/lib/directus";
import { getDictionary } from "@/lib/getDictionary";
import { createConnection } from "net";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import React, { FormEvent, useState } from "react";

const CTACard =  ({dictionary}:{dictionary:any}) => {
  //Server Actions Approach

  // // const dictionary = await getDictionary(locale);
  // // const formAQction = async (formData: FormData) => {
  // //   "use server";
  // //   try {
  // //     const email = formData.get("email");
  // //     await directus.items("subscribers").createOne({
  // //       email,
  // //     });
  // //     revalidateTag("subscribers-count");
  // //   } catch (error) {
  // //     console.log(error);
  // //   }
  // // };

  // const subscribersCount = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,
  //   {
  //     next: {
  //       tags: ["subscribers-count"],
  //     },
  //   }
  // )
  //   .then((res) => res.json())
  //   .then((res) => res.meta.total_count)
  //   .catch((error) => console.log(error));
//client Component Approach
const [email, setEmail] = useState("");
const [isHandling,setIsHandling] = useState(false);

const submitHandler = async(e:FormEvent) =>{
  try {
    e.preventDefault;
    setIsHandling(true);
    await directus.items("subscribers").createOne({
      email,
    });
    setIsHandling(false);
    setEmail("");
  } catch (error) {
    console.log("Error");
    setIsHandling(false);
  }
}
  return (
    <div className="rounded-md bg-slate-100 py-10 px-10 relative overflow-hidden">
      {/*Overlay */}
      <div className="absolute z-10 inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      {/*Image */}
      <Image
        fill
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0"
        className="object-center object-cover"
        alt="CTA  Card Image"
      />
      {/*Content Component*/}
      <div className="relative z-20">
        <div className="fpnt-medium text-lg">#exlporetheworld</div>
        <h3 className="text-4xl font-semibold mt-3">
          {dictionary.ctaCard.titel}
        </h3>
        <p className="mt-2 text-lg max-w-lg">

          {dictionary.ctaCard.description}
        </p>
        <form onSubmit={submitHandler}
        //Server Actions Approach
          // key={subscribersCount + "subscribers-form"}
          // // action={formAQction}
          className="mt-6 flex items-center gap-2 w-full"
        >
          {/*Form*/}
          <input
            type="email"
            name="email"
            value={email}
            onChange={
              (e)=>{
                setEmail(e.target.value);
              }
            }
            placeholder={dictionary.ctaCard.placeholder}
            className="w-full md:w-auto bg-white/80 text-base rounded-md py-2 px-3 place-folder:text-sm outline-none focus:ring-2 ring-neutral-600"
          />
          <button type="submit" className="bg-neutral-900 whitespace-nowrap rounded-md py-2 px-3 text-neutral-200">
            {!isHandling ? dictionary.ctaCard.button:"Sending..."}
          </button>
        </form>
        {/* subscribers for Server Action Approach */}
        {/* <div className="mt-5 text-neutral-700 ">
        {dictionary.ctaCard.subscriberText1}
          <span>
            {subscribersCount && subscribersCount > 0 ? (
              <span className="bg-neutral-700 rounded-md text-neutral-100 mx-2 py-1 px-2 text-sm">
                {" "}
                {subscribersCount}{" "}
              </span>
            ) : (
              "0"
            )}
          </span>
          {dictionary.ctaCard.subscriberText2}
        </div> */}
      </div>
    </div>
  );
};

export default CTACard;
