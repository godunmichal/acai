import React from "react";
import ServerListContent from "../ServerListContent";
import ServerListHeader from "../ServerListHeader";
import { MainContainer, ServersList } from "./MainElements";

function Main() {
  return (
    <MainContainer>
      <ServersList>
        <ServerListHeader />
        <ServerListContent />
      </ServersList>
    </MainContainer>
  );
}

export default Main;
