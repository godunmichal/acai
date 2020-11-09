import styled from "styled-components/macro";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #494e61;
  width: 100vw;
  height: 73px;
`;

export const NavbarLogo = styled.div`
  display: flex;
  border-right: 2px solid #757b8f;
  align-items: center;
  height: 50%;
  width: 214px;
  padding-left: 27px;
`;
export const LogoIcon = styled.div`
  height: 17px;
  width: 17px;
  border: 2px solid #7d82f7;
  border-radius: 50%;
`;
export const LogoText = styled.div`
  padding-top: 1px;
  padding-bottom: 4px;
  padding-left: 12px;
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
