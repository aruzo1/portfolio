import Image from "next/future/image";
import Link from "next/link";
import useMenu from "hooks/useMenu";
import MenuIcon from "./MenuIcon";
import { MenuBtn, MenuDesktop, MenuMobile, NavbarStyled } from "./style";

function Navbar() {
  const menu = useMenu();

  return (
    <NavbarStyled>
      <Link href="#home">
        <Image src="/logo.png" alt="logo" height="32" priority />
      </Link>

      <MenuDesktop />

      <MenuBtn variant="primary" onClick={menu.toggle}>
        <MenuIcon />
      </MenuBtn>
      {menu.show && <MenuMobile toggle={menu.toggle} />}
    </NavbarStyled>
  );
}

export default Navbar;
