import TextLink from "../atoms/TextLink";
import IconLink from "../atoms/IconLink";
import IconButton from "../atoms/IconButton";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavList from "./NavList";
import NavItem from "../atoms/NavItem";

export default function NavBar(props) {
  const [OpenNav, setOpenNav] = useState(false);

  const handleClick = (e) => {
    setOpenNav(!OpenNav);
  };
  const navItems = (
    <>
      {!props.splash ? (
        <>
          <NavItem type="link" href="/home" text="Home"></NavItem>
          <NavItem type="link" href="/about" text="About"></NavItem>
        </>
      ) : (
        ""
      )}

      <NavItem
        type="icon"
        href="https://github.com/DaceyTom2"
        icon="github"
      ></NavItem>
    </>
  );

  return (
    <>
      {/* Hamburger Menu for mobile */}
      <div className="sm:hidden">
        <HamburgerMenu>{navItems}</HamburgerMenu>
      </div>
      {/* Nav List for desktop */}
      <div className="hidden sm:block">
        <NavList>{navItems}</NavList>
      </div>
    </>
  );
}
