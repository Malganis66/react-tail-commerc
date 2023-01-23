import { useContext } from "react";
import { useState } from "react";

import { useCartDetail } from "@/context/useCartDetailCTX";

import logoSneakers from "@/assets/images/logo.svg";
import avatarImg from "@/assets/images/image-avatar.png";

import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";
import CartDetailHeader from "@/components/header/CartDetailHeader";

const MainHeader = () => {
  const {notificationCartProduct} = useContext(useCartDetail)

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [OpenCartDetail, setOpenCartDetail] = useState(false);
  const OpenMenu = () => {
    setIsOpenMenu(true);
  };
  const CloseMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <>
      <header className="flex container relative mx-auto px-4 items-center gap-8 py-4 md:py-0">
        <button className="md:hidden" onClick={OpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={logoSneakers}
          alt="Sneakers-logo"
          className="mr-auto mb-1 h-5 md:mr-0"
        />
        <nav
          className={`font-bold md:p-0 md:mr-auto md:flex md:flex-row md:gap-4 md:static ${
            isOpenMenu
              ? "absolute w-4/5 top-0 left-0 h-full gap-y-4 p-6 bg-white flex flex-col z-10"
              : "hidden"
          }`}
        >
          <button className="mb-6 md:hidden" onClick={CloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collection" />
          <NavLinkHeader text="Men" />
          <NavLinkHeader text="Women" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button className="relative" onClick={() => setOpenCartDetail(!OpenCartDetail)}>
            <CartIcon />
            <span className="absolute top-2 right-0 translate-x-[6px] bg-orange-prime px-2 text-[7px] text-white rounded-lg">{notificationCartProduct}</span>
          </button>
          <img src={avatarImg} alt="" className="w-8" />
          {OpenCartDetail && <CartDetailHeader />}
        </div>
      </header>
      <span className="container w-full hidden bg-gray-500 md:block h-[1px] mx-auto"></span>
    </>
  );
};

export default MainHeader;
