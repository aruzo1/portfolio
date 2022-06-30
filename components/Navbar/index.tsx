import Image from "next/future/image";
import Link from "next/link";
import useMenu from "hooks/useMenu";
import MenuIcon from "./MenuIcon";
import {
  MenuBtn,
  MenuDesktop,
  MenuMobile,
  NavbarContainer,
  NavbarStyled,
} from "./style";

function Navbar() {
  const menu = useMenu();

  return (
    <NavbarStyled>
      <NavbarContainer>
        <Link href="#home">
          <Image src="/images/logo.png" alt="logo" height="32" priority />
        </Link>

        <MenuDesktop />

        <MenuBtn variant="primary" onClick={menu.toggle}>
          <MenuIcon />
        </MenuBtn>
        {menu.show && <MenuMobile toggle={menu.toggle} />}
      </NavbarContainer>
    </NavbarStyled>
  );
}

export default Navbar;
