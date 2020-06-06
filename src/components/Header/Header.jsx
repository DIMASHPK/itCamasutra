import React from "react";
import s from "./Header.module.css";


const Header = ({logoutUserDataThunkCreater}) => (
  <header className={s.header}>
    <img
      src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"
      alt={""}
    />
    <div className={s.loginBlock}>
        <button onClick={logoutUserDataThunkCreater}> Logout </button>
    </div>
  </header>
);

export default Header;
