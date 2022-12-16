import { useState } from "react";
import Humburger from "../../../components/shared/Humburger";
import { HeaderContainer } from "./styles";

type HeaderProps = {
  sideMenuOpen?: boolean
  toggleSideMenu: () => void
}

const Header = ({ sideMenuOpen, toggleSideMenu }: HeaderProps) => {
  
  return (
    <HeaderContainer key={"asd"}>
      <Humburger opened={sideMenuOpen} size={30} onClick={toggleSideMenu} />

    </HeaderContainer>
  );
}

export default Header;
