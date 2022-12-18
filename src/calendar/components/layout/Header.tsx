import { useState } from "react";
import { useTheme } from "styled-components";
import Humburger from "../../../components/shared/Humburger";
import { HeaderContainer } from "./styles";

type HeaderProps = {
  sideMenuOpen?: boolean
  toggleSideMenu: () => void
}

const Header = ({ sideMenuOpen, toggleSideMenu }: HeaderProps) => {
  const theme = useTheme()
  return (
    <HeaderContainer>
      <Humburger opened={sideMenuOpen} size={theme.header.toggleButtonSize} onClick={toggleSideMenu} />
    </HeaderContainer>
  );
}

export default Header;
