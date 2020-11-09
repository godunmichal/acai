import styled from "styled-components/macro";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 268px;
  height: 38px;
  border: 2px solid #d4d7e1;
  border-radius: 25px;
`;

export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 14px;
  width: 14px;
  svg {
    color: #a9aec1;
  }
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: #a9aec1;
  margin-left: 21px;

  &::placeholder {
    color: #a9aec1;
  }
  &:focus {
    outline: none;
  }
`;
