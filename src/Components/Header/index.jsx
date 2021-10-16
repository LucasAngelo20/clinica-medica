import React from "react";

import { Container, HeaderContainer, LogoutButton, Icon, Logo } from "./styles";

import PowerIcon from "../../Assets/Images/on-off-power-button_icon-icons.com_53938.png";
import LogoIcon from "../../Assets/Images/Logo.png";

export default function Header({ children }) {
  return (
    <Container>
      <HeaderContainer>
        <Logo src={LogoIcon} />
        <LogoutButton to="/">
          <Icon src={PowerIcon} />
        </LogoutButton>
      </HeaderContainer>
      {children}
    </Container>
  );
}

//header
