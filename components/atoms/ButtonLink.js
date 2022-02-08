import Link from "next/link";

export default function ButtonLink(props) {
  return (
    <Link href={props.href}>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
        {props.text}
      </a>
    </Link>
  );
}
