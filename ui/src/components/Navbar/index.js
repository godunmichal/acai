import React from "react";
import { LogoIcon, LogoText, NavbarContainer, NavbarLogo } from "./NavbarElements";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <LogoIcon/>
        <LogoText>Recruitment task</LogoText>
      </NavbarLogo>
    </NavbarContainer>
  );
}

export default Navbar;
