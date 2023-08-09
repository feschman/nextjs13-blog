import siteConfig from "@/config/site";
import { getDictionary } from "@/lib/getDictionary";
import Link from "next/link";
import React from "react";
import SocialLink from "../elements/social-link";
import PaddingContainer from "../layout/padding-container";

async function Footer({locale}:{locale:string}) {
  const dictionary =await getDictionary(locale);
  return (
    <div className="py-8 border-t mt-10">
      <PaddingContainer>
        <div className="text-3xl font.bold">
          <h2>{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-neutral-700 text-lg">
            {dictionary.footer.description}
          </p>
        </div>
        {/**Social and currently At */}
        <div className=" flex justify-between mt-6 gap-4 flex-wrap">
          <div>
            <div className="font-medium">#exploretheworld</div>
            <div className="flex items-center gap-3 text-neutral-600 mt-2">
              <SocialLink
                platform="twitter"
                link={siteConfig.socialLinks.twitter}
              />
              <SocialLink
                platform="instagram"
                link={siteConfig.socialLinks.instagram}
              />
              <SocialLink
                platform="github"
                link={siteConfig.socialLinks.github}
              />
               <SocialLink
                platform="youtube"
                link={siteConfig.socialLinks.youtube}
              />
               <SocialLink
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md flex items-stretch">

            <div className=" py2 px-3 flex items-center gap-2">
              <div className="bg-emerald-400 rounded-full h-2 w-2 " />
              <div className="text-sm text-neutral-400">{dictionary.footer.currentlyAtText}</div>
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        {/*Bottom Section */}
        <div className="py-3 border-t flex items-center gap-4 flex-wrap justify-between mb-2 mt-16">
          <div className="text-sm text-neutral-400 ">
          {dictionary.footer.rightText} {new Date().getFullYear()}
          </div>
          <div className="text-sm text-neutral-400 ">
           {dictionary.footer.creatorText} {" "}
            <Link
              className="underline undeline-offset-4"
              href="https://twitter.com/mkrdev"
            >
              @mkrdev
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
}

export default Footer;
