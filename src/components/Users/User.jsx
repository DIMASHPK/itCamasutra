import React from 'react'
import s from "./users.module.css";
import Preloader from "../common/Preloader/Prelodaer";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/user.png";


export const User = ({
                         user: {photos, followed, name, status, location, ...other},
                         isFetching,
                         unfollowUser,
                         followingInProgress,
                         followUser
                     }) => (
    <div className={s.user}>
        <div className={s.leftSide}>
            {isFetching ? (
                <Preloader/>
            ) : (
                <NavLink to={`/profile/${other.id}`}>
                    <img
                        src={photos.small != null ? photos.small : userPhoto}
                        alt={"avatar"}
                    />
                </NavLink>
            )}
            <button onClick={followed ? () => unfollowUser(other.id) : () => followUser(other.id)}
                    disabled={followingInProgress.some(id => id === other.id)}
            >
                {followed ? 'unfollow' : 'follow'}
            </button>
        </div>
        <div className={s.rightSide}>
            <div className={s.leftInner}>
                <h3>{name}</h3>
                <p>{status}</p>
            </div>
            <div className={s.rightInner}>
                        <span>
                          {location ? location.city : "Kyiv"}
                            <br/>
                            {location ? location.country : "Ukraine"}
                        </span>
            </div>
        </div>
    </div>)