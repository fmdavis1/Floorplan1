import React from "react";
// import ReactDOM from "react-dom/client";
import Kitchen from "./Kitchen";
import Bedroom from "./Bedroom";
import Full_Bath from "./Full_Bath";
import LivingRoom from "./LivingRoom";
import Half_Bath from "./Half_Bath";
function Floorplan() {
  return (
    <div id="kitchen">
      <h1>Floorplan</h1>
      <Bedroom bedNums="1" />
      <Kitchen />
      <Full_Bath />
      <Bedroom bedNums="2" />
      <LivingRoom />
      <Half_Bath />
      <Bedroom bedNums="3" />
    </div>
  );
}
export default Floorplan;
