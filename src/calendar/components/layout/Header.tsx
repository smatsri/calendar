import { HeaderContainer } from "./styles";

type HeaderProps = {
  sideMenuOpen?: boolean
  toggleSideMenu: () => void
}

const Header = ({ sideMenuOpen, toggleSideMenu}: HeaderProps) => {
  return (
    <HeaderContainer>
      <button onClick={toggleSideMenu}>
        side menu 
      </button>

    </HeaderContainer>
  );
}

export default Header;
