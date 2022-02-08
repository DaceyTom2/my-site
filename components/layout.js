import Head from "next/head";
import TextLink from "../components/atoms/TextLink";
import IconLink from "../components/atoms/IconLink"
import Link from "next/link";

const name = "Thomas Dacey";
export const siteTitle = "Next.js Sample Website";

export default function Layout(props) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-400 to-blue-300">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="h-16 flex border-b-2 border-gray-300 p-2 align-middle">
        <div className="flex h-12 w-80">
          <Link href="/home">
            <img
              className="object-cover h-auto w-24 p-1 rounded-lg"
              src="images/TLogo.png"
              alt=""
            />
          </Link>
          <span className="text-2xl text-center p-2 text-gray-700">Tom's site</span>
          
        </div>
        <div className="flex-auto"></div>
        <div className="h-12 hidden md:flex">
          <TextLink href="/home" text="Home" />
          <TextLink href="/about" text="About" />
          <IconLink href="https://github.com/DaceyTom2" icon="github" />
        </div>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
