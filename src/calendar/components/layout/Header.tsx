import { useState } from "react";
import Humburger from "../../../components/shared/Humburger";
import { HeaderContainer } from "./styles";

type HeaderProps = {
  sideMenuOpen?: boolean
  toggleSideMenu: () => void
}

const Header = ({ sideMenuOpen, toggleSideMenu }: HeaderProps) => {
  
  return (
    <HeaderContainer>
      <Humburger opened={sideMenuOpen} size={40} onClick={toggleSideMenu} />
      {/* <button onClick={toggleSideMenu}>
        side menu 
      </button> */}

    </HeaderContainer>
  );
}

export default Header;
