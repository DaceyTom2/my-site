import TextLink from "../atoms/TextLink";
import IconLink from "../atoms/IconLink";
import IconButton from "../atoms/IconButton";

export default function NavItem(props) {
  if (props.type == "link") {
    return (
      <li className="p-2 m-1">
        <TextLink href={props.href} text={props.text} />
      </li>
    );
  } else if (props.type == "icon") {
    return (
      <li className="h-12 w-12">
        <IconLink href={props.href} icon={props.icon} />
      </li>
    );
  }
}
