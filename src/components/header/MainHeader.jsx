import logoSneakers from "@/assets/images/logo.svg";
import avatarImg from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import { useState } from "react";

const MainHeader = () => {
  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static md:p-0 md:mr-auto md:flex md:flex-row md:gap-4"
  );
  const OpenMenu = () => {
    setNavClass(
      "absolute font-bold w-4/5 md:static md:p-0 top-0 left-0 h-full gap-y-4 p-6 bg-white flex flex-col md:mr-auto md:flex md:flex-row md:gap-4"
    );
  };
  const CloseMenu = () => {
    setNavClass(
      "hidden font-bold md:static md:p-0 md:mr-auto md:flex md:flex-row md:gap-4"
    );
  };
  return (
    <>
      <header className="flex container mx-auto px-4 items-center gap-8 py-4 md:py-0">
        <button className="md:hidden" onClick={OpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={logoSneakers}
          alt="Sneakers-logo"
          className="mr-auto mb-1 h-5 md:mr-0"
        />
        <nav className={navClass}>
          <button className="mb-6 md:hidden" onClick={CloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text='Collection'/>
          <NavLinkHeader text='Men'/>
          <NavLinkHeader text='Women'/>
          <NavLinkHeader text='About'/>
          <NavLinkHeader text='Contact'/>
        </nav>
        <div className="flex gap-4">
          <button className="">
            <CartIcon />
          </button>
          <img src={avatarImg} alt="" className="w-10" />
        </div>
      </header>
      <span className="container w-full hidden bg-gray-500 md:block h-[1px] mx-auto"></span>
    </>
  );
};

export default MainHeader;
