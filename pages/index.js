import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import ButtonLink from "../components/atoms/ButtonLink";

export default function Splash() {
  return (
    <div className="flex h-screen">
      <div className="m-auto flex-col text-center">
        <img
          className="object-cover h-72 w-96 rounded-lg"
          src="images/TLogo.png"
          alt=""
        />
        <h1 className="text-gray-700 text-3xl font-bold underline p-5">Tom's site</h1>
        <div className="m-auto text-center">
          <ButtonLink href="/home" text="English" />
          <ButtonLink href="/fr/home" text="français" />
        </div>
      </div>
    </div>
  );
}
