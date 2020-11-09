import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsServer,
  listServers,
  offServer,
  onServer,
  rebootServer,
} from "../../actions/serverActions";
import { MenuContainer, MenuItem } from "./MenuElements";

function Menu({ setIsOpen, serverStatus, serverId }) {
  const dispatch = useDispatch();
  const serverDetails = useSelector((state) => state.serverDetails);
  const { server, loading } = serverDetails;
  const [rebooting, setRebooting] = useState(true);

  const changeOnServer = () => {
    setIsOpen(false);
    dispatch(onServer(serverId));
    dispatch(listServers());
  };
  const changeOffServer = () => {
    setIsOpen(false);
    dispatch(offServer(serverId));
    dispatch(listServers());
  };
  const changeRebootServer = () => {
    setIsOpen(false);
    dispatch(rebootServer(serverId));
    dispatch(listServers());
    dispatch(detailsServer(serverId));
    setRebooting(true);
  };

  //   if (rebooting && !loading) {
  //     setInterval(() => {
  //       dispatch(detailsServer(serverId));
  //       if (server.status === "REBOOTING") {
  //         setRebooting(true);
  //       } else {
  //         setRebooting(false);
  //       }
  //     }, 1000);
  //   }
  return (
    <MenuContainer>
      {serverStatus === "ONLINE" ? (
        <>
          {" "}
          <MenuItem onClick={changeOffServer}>Turn off</MenuItem>
          <MenuItem onClick={changeRebootServer}>Reboot</MenuItem>
        </>
      ) : serverStatus === "REBOOTING" ? (
        <>
          <MenuItem>Rebooting</MenuItem>
        </>
      ) : (
        <>
          {" "}
          <MenuItem onClick={changeOnServer}>Turn on</MenuItem>
        </>
      )}
    </MenuContainer>
  );
}

export default Menu;
