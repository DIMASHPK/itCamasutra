import React from "react";
import s from "./Message.module.css";

const Message = ({id, msg}) => (
    <div className={s.message}>
        {id} {msg}
    </div>
);

export default Message;
