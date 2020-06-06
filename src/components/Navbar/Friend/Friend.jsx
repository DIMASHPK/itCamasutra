import React from "react";
import s from "./Friend.module.css";

const Friend = props => (
    <div className={s.friend}>
      <img src={props.src} alt="friend avatar" />
      <p>{props.name}</p>
    </div>
);


export default Friend;
