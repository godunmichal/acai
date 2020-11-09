import React from "react";
import Search from "../Search";
import {
  ServerListHeaderContainer,
  ServerListHeaderTitle,
  ServerListHeaderSubtitle,
  ServerListHeaderTexts,
} from "./ServerListHeaderElements";

function ServerListHeader() {
  return (
    <ServerListHeaderContainer>
      <ServerListHeaderTexts>
        <ServerListHeaderTitle>Servers</ServerListHeaderTitle>
        <ServerListHeaderSubtitle>
          Numbers od elements: 16
        </ServerListHeaderSubtitle>
      </ServerListHeaderTexts>
      <Search />
    </ServerListHeaderContainer>
  );
}

export default ServerListHeader;
