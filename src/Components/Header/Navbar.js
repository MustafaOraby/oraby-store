import { useState } from "react";
import Nav from "./Nav";
import NavRightSide from "./NavRightSide";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);

  };
const closeNavbar = () => {
  setIsOpen(!isOpen);
}

  return (
    <>
      <div className="container mx-auto px-5 flex  items-center justify-center h-12">
        <div className="lg:w-52">
          <Link  to="/">
            <img
              className="flex max-w-10 md:max-w-20  2xl:max-w-20 rounded-md"
              src={Logo}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:flex justify-between mx-auto  items-center w-1/2 lg:text-sm ">
          <Nav />
        </div>
        <div className="mx-auto lg:mx-0">
          <NavRightSide />
        </div>

        <div className="  lg:hidden md:w-20 flex justify-end w-8">
          <RxHamburgerMenu
            onClick={toggleNavbar}
            className="text-xl md:text-3xl  lg:text-5xl  cursor-pointer "
          />
        </div>
      </div>

      <div
        className={`transition-all duration-200 ease-in-out transform lg:hidden overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center justify-start ">
          <Nav closeNavbar={closeNavbar}/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
