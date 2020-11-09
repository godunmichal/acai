import React, { useState, useEffect } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ClearIcon from "@material-ui/icons/Clear";
import {
  ServerListContentTableItemContainer,
  ServerListContentTableItemName,
  ServerListContentTableItemOptions,
  ServerListContentTableItemStatus,
  ServerListContentTableItemStatusIcon,
  ServerListContentTableItemStatusText,
  ServerListContentTableInfo,
} from "./ServerListContentTableItemElements";
import Menu from "../Menu";

function ServerListContentTableItem({ server }) {
  const [isOpen, setIsOpen] = useState(false);

  const menu = React.useRef(null);
  function handleClick(e) {
    if (!e.target.closest(`.${menu.current.className}`) && isOpen) {
      setIsOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <ServerListContentTableItemContainer>
      <ServerListContentTableInfo>
        <ServerListContentTableItemName>
          {server.name}
        </ServerListContentTableItemName>
        <ServerListContentTableItemStatus>
          <ServerListContentTableItemStatusIcon
            online={server.status === "ONLINE"}
            reboot={server.status === "REBOOTING"}
          >
            {server.status === "ONLINE" ? (
              <FiberManualRecordIcon />
            ) : (
              <ClearIcon />
            )}
          </ServerListContentTableItemStatusIcon>
          <ServerListContentTableItemStatusText
            online={server.status === "ONLINE"}
            reboot={server.status === "REBOOTING"}
          >
            {server.status}
            {server.status === "REBOOTING" ? "..." : ""}
          </ServerListContentTableItemStatusText>
        </ServerListContentTableItemStatus>
      </ServerListContentTableInfo>
      <ServerListContentTableItemOptions
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        ref={menu}
        className="menuDropdown"
      >
        <MoreHorizIcon />
        {isOpen ? (
          <Menu
            setIsOpen={setIsOpen}
            serverId={server.id}
            serverStatus={server.status}
          />
        ) : null}
      </ServerListContentTableItemOptions>
    </ServerListContentTableItemContainer>
  );
}

export default ServerListContentTableItem;
