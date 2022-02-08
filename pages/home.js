import Head from "next/head";
import { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="text-3xl py-2 text-gray-700 font-bold">Welcome to the home page!</h1>
    </>
  );
}
