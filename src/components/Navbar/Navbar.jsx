import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";


const Navbar = ({friends}) => (
    <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to={"/profile/"} activeClassName={`${s.active}`}>
                Profile
            </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={"/dialogs/"} activeClassName={`${s.active}`}>
                Messages
            </NavLink>
        </div>
        <div className={s.friends}>
            <h2>
                <NavLink to={"/users/"}>
                    Friends
                </NavLink>
            </h2>
            <div className={s.wrap_friend}>
                {friends.map((item, i) => (
                    <Friend src={item.src} name={item.name} key={i}/>
                ))}
            </div>
        </div>
    </nav>
);

export default Navbar;
