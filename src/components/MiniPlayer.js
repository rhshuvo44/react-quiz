import React from "react";
import "../styles/MiniPlayer.css";
import img from "../assets/img/nat-9.jpg";
const MiniPlayer = () => {
  return (
    <div class="miniPlayer floatingBtn">
      <span class="material-icons-outlined open"> play_circle_filled </span>
      <span class="material-icons-outlined close"> close </span>
      <img src={img} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
