import { SideMenuContainer } from "./styles";

type SideMenuProps = {
  open?: boolean
}

const SideMenu = ({ open }: SideMenuProps) => {
  return (
    <SideMenuContainer sideMenuOpen={open}>

    </SideMenuContainer>
  );
}

export default SideMenu;