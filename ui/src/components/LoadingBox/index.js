import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LoadingBoxContainer } from "./LoadingBoxElements";

function LoadingBox() {
  return (
    <LoadingBoxContainer>
      <CircularProgress /> Loading...
    </LoadingBoxContainer>
  );
}

export default LoadingBox;
