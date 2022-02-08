import Link from "next/link";

export default function TextLink(props) {
  return (
    <Link href={props.href}>
      <a className="text-blue-500 hover:text-blue-700 font-bold p-2 m-1">
        {props.text}
      </a>
    </Link>
  );
}
