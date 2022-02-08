import ButtonLink from "../components/atoms/ButtonLink";

export default function Splash(props) {
  return (
    <div className="flex h-screen">
      <div className="m-auto flex-col text-center">
        <img
          className="object-cover h-72 w-96 rounded-lg"
          src="images/TLogo.png"
          alt=""
        />
        <h1
          className="text-gray-700 text-3xl font-bold underline p-5"
          lang="en"
        >
          Tom's site
        </h1>
        <div className="m-auto text-center">
          <ButtonLink href="/home" text="English" lang="en" />
          <ButtonLink href="/fr/home" text="français" lang="fr" />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      splash: true,
    },
  };
}
