import TextLink from "../atoms/TextLink";
import IconLink from "../atoms/IconLink";
import IconButton from "../atoms/IconButton";

export default function NavList(props) {
  return (
    <>
      <div className={"h-12 w-auto top-auto left-auto flex"}>
        <ul className="sm:flex flex-auto" id="mobile-menu">
          {props.children}
        </ul>
      </div>
    </>
  );
}
