import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLink(props) {
  const icon = props.icon == "github" ? faGithub : undefined;

  return (
    <Link href={props.href}>
      <FontAwesomeIcon
        className="p-3 text-blue-500 hover:text-blue-700"
        icon={icon}
      />
    </Link>
  );
}
