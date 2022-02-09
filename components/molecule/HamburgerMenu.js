import TextLink from "../atoms/TextLink";
import IconLink from "../atoms/IconLink";
import IconButton from "../atoms/IconButton";

import { useState } from "react";

export default function HamburgerMenu(props) {
  const [OpenNav, setOpenNav] = useState(false);

  const handleClick = (e) => {
    setOpenNav(!OpenNav);
  };
  return (
    <>
      {/* Hamburger/Bar Button */}
      <div data-collapse-toggle="mobile-menu" className="h-12">
        <IconButton icon="hamburger" size="md" onClick={handleClick} />
      </div>
      <div
        className={[
          "w-full absolute top-16 right-0 flex bg-white border-x-2 border-b-2 border-gray-300 ",
          OpenNav ? "" : " hidden",
        ]}
      >
        <ul className="flex-auto" id="mobile-menu">
          {props.children}
        </ul>
        <div className="sm:hidden">
          <IconButton icon="x" size="sm" onClick={handleClick} />
        </div>
      </div>
    </>
  );
}
