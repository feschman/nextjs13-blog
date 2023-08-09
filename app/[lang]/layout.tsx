
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/navigation/footer";
import { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";
import siteConfig from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

// export const metadata:Metadata = {
//   title: "Explorer",
//   description: "A minimal and lovely blog which shares experiences and cities around the world!",
// };
export const generateMetadata = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  //get the Dictionary based on Lang
  const dictionary = await getDictionary(lang);
  return {
    title: {
      template:"%s | "+siteConfig.siteName,
      default: siteConfig.siteName,
    },
    description: dictionary.footer.description,
    openGraph: {
      title: siteConfig.siteName,
      description: dictionary.footer.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
      siteName: siteConfig.siteName,
      images: [
        {
          url: 'http://localhost:3000/opengraph-image.jpg',
          width: 1102,
          height: 688,
        },

      ],
      locale: lang,
      type: 'website',
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      languages: {
        'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
        'de-DE': `${process.env.NEXT_PUBLIC_SITE_URL}/de`,
      },
    },
    // vericifacation:{
    //   google:
    // }
  };
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        {/* @ts-expect-error  Async Server Component */}
        <Navigation locale={lang} />
        <div className="pt-10 min-h-[calc(100vh-300px)]">{children}</div>
        {/* @ts-expect-error  Async Server Component */}
        <Footer locale={lang} />
      </body>
    </html>
  );
}
