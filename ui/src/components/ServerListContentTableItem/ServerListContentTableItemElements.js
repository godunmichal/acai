import styled from "styled-components/macro";

export const ServerListContentTableItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f2f3f6;
  padding: 8px;
`;
export const ServerListContentTableInfo = styled.div`
  width: 415px;
  display: flex;
  justify-content: space-between;
`;
export const ServerListContentTableItemName = styled.p`
  display: flex;
  align-items: center;
  padding-left: 42px;
  font-family: Open Sans;
  font-size: 13px;
  color: #494e61;
`;
export const ServerListContentTableItemStatus = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  justify-content: flex-start;
`;

export const ServerListContentTableItemStatusIcon = styled.div`
  display: ${({ reboot }) => (reboot ? "none" : "flex")};
  color: ${({ online }) => (online ? "#24A1A9" : "#EA5885")};
  svg {
    font-size: 14px;
  }
`;

export const ServerListContentTableItemStatusText = styled.p`
  font-family: Open Sans;
  font-size: 12px;
  color: ${({ online }) => (online ? "#24A1A9" : "#000")};
  color: ${({ reboot }) => (reboot ? "#b074cf" : "")};
`;

export const ServerListContentTableItemOptions = styled.div`
  display: inline-block;
  margin-right: 20px;
  position: relative;
  color: #d4d7e1;
  padding: 7px;
  border-radius: 50%;
  &:hover {

    background-color: #f2f3f6;
  }
`;
