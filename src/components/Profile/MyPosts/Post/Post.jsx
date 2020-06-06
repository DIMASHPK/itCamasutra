import React from "react";
import Preloader from "../../../common/Preloader/Prelodaer";
import s from "./Post.module.css";

const Post = ({ avatar, message, likesCount, isFetching, name }) => (
  <div className={s.item}>
    <div className={s.avatarWrap}>
      {isFetching ? <Preloader /> : <img src={avatar} alt="avatr" />}
    </div>
    <div>
      <h4>{name}</h4>
      <span className={s.message}>{message}</span>
      <p className={s.like}>like {likesCount}</p>
    </div>
  </div>
);

export default Post;
