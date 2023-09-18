import "@google/model-viewer/dist/model-viewer.min.js";
import { Overlay } from "./Overlay/Overlay";
import React from "react";
import { App as Canvas } from "./Canvas";

const CanSpace = () => {
  return (
    <>
      <Canvas />
      <Overlay />
    </>
  );
};

export default CanSpace;
