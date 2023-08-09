
export interface SiteConfig{
  siteName:String,
  description:String,
  currentlyAt:String,
  socialLinks:{
    twitter:String,
    youtube:String,
    github:String,
    linkedin:String,
    instagram:String,
    facebook:String,
  }
}
const siteConfig:SiteConfig = {
  siteName:"Explorer",
  description:'A minimal and lovely blog which shares experiences and cities around the world!',
  currentlyAt:"🇦🇹",
  socialLinks:{
    twitter:"https://twitter.com/makrdev",
    youtube:"https://youtube.com/@makrdev",
    github:"https://github.com/batuhanbilginn",
    linkedin:"https://linkedin.com/inbatuhanbilgin",
    instagram:"https://instagram.com/batuhanbilginn",
    facebook:"https://facebook.com/batuhanbilginn",
  }
};
export default siteConfig;
