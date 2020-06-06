import React from "react";
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = ({id, name}) => {
    let path = `/dialogs/${id}`;

    return (
        <div
            className={`${s.dialogs_item} ${
                window.location.pathname === path ? s.active : ""
            }`}
        >
            <NavLink to={path} activeClassName={s.active}>
                {name}
            </NavLink>
        </div>
    );
};

export default Dialog;
