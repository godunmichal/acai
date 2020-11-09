import React from "react";
import {
  ServerListContentTableHeaderElement,
  ServerListContentTableHeaderContainer,
  ServerListContentTableHeaderInfo,
} from "./ServerListContentTableHeaderElements";

function ServerListContentTableHeader() {
  return (
    <ServerListContentTableHeaderContainer>
      <ServerListContentTableHeaderInfo>
        <ServerListContentTableHeaderElement>
          NAME
        </ServerListContentTableHeaderElement>
        <ServerListContentTableHeaderElement>
          STATUS
        </ServerListContentTableHeaderElement>
      </ServerListContentTableHeaderInfo>
    </ServerListContentTableHeaderContainer>
  );
}

export default ServerListContentTableHeader;
