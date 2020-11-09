import React, { useEffect } from "react";
import { ServerListContentContainer } from "./ServerListContentElements";
import ServerListContentTableHeader from "../ServerListContentTableHeader";
import ServerListContentTableItem from "../ServerListContentTableItem";
import { listServers } from "../../actions/serverActions";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";

function ServerListContent() {
  const serverList = useSelector((state) => state.serverList);
  const { loading, error, servers } = serverList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listServers());
  }, [dispatch]);
  return (
    <ServerListContentContainer>
      <ServerListContentTableHeader />
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <>
          {servers.map((server) => (
            <ServerListContentTableItem
              key={server.id}
              server={server}
            />
          ))}
        </>
      )}
    </ServerListContentContainer>
  );
}

export default ServerListContent;
