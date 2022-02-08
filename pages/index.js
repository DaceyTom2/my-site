import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import ButtonLink from "../components/atoms/ButtonLink";

export default function Splash() {
  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-400 to-blue-300">
      <div className="m-auto flex-col text-center">
      <img class="object-cover h-72 w-96 rounded-lg" src="images/profile.jpg" alt="" />
        <h1 className="text-3xl font-bold underline p-5">Welcome Bonjour</h1>
        <div className="m-auto text-center">
          <ButtonLink href="/home" text="English" />
          <ButtonLink href="/fr/home" text="francais" />
        </div>
      </div>
    </div>
  );
}
