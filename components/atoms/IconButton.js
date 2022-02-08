import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function IconLink(props) {
  var dict = {
    github: faGithub,
    hamburger: faBars,
    x: faClose,
  };
  var size = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-18 w-18",
  };
  return (
    <button type="button" className={size[props.size]} onClick={props.onClick}>
      <FontAwesomeIcon
        className="p-3 text-blue-500 hover:text-blue-700"
        icon={dict[props.icon]}
      />
    </button>
  );
}
