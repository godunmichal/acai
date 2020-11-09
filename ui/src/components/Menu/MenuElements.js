import styled from "styled-components/macro";

export const MenuContainer = styled.ul`
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  list-style: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  z-index: 1;
`;

export const MenuItem = styled.li`
  font-size: 13px;
  font-family: Open Sans;
  padding: 15px 40px;
  color: #000;
  width: 150px;
  background-color: #fff;
  &:hover {
    background-color: #f2f3f6;
    cursor: pointer;
  }
`;
