import TextLink from "../atoms/TextLink";
import IconLink from "../atoms/IconLink";
import IconButton from "../atoms/IconButton";
import { useState } from "react";

export default function NavBar(props) {
  const [OpenNav, setOpenNav] = useState(false);
    
  const handleClick = (e) => {
    setOpenNav(!OpenNav);
  };
  return (
    <>
      {/* Hamburger/Bar Button */}
      <div data-collapse-toggle="mobile-menu" className="h-12 sm:hidden">
        <IconButton icon="hamburger" size="md" onClick={handleClick} />
      </div>
      <div
        className={[
          "sm:h-12 w-full sm:w-auto absolute top-16 right-0 sm:top-auto sm:left-auto flex sm:flex bg-white border-x-2 border-b-2 border-gray-300 sm:border-0 sm:bg-transparent ",
          OpenNav ? "" : " hidden",
        ]}
      >
        <ul className="sm:flex flex-auto" id="mobile-menu">
          {!props.splash ? (
            <>
              <li className="p-2 m-1">
                <TextLink href="/home" text="Home" />
              </li>
              <li className="p-2 m-1">
                <TextLink href="/about" text="About" />
              </li>
            </>
          ) : (
            ""
          )}
          <li className="h-12 w-12">
            <IconLink href="https://github.com/DaceyTom2" icon="github" />
          </li>
        </ul>
        <div className="sm:hidden">
            <IconButton icon="x" size="sm" onClick={handleClick} />
        </div>
      </div>
    </>
  );
}
