import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import ButtonLink from "../components/atoms/ButtonLink";

export default function Splash() {
  return (
    <div>
      <div className="flex">
        <div className="m-auto">
          <h1 className="text-3xl font-bold underline p-5">Welcome Bonjour</h1>
        </div>
      </div>

      <div className="flex">
        <div className="m-auto">
          <ButtonLink href="/home" text="English" />
          <ButtonLink href="/fr/home" text="francais" />
        </div>
      </div>
    </div>
  );
}
