import React from "react";
import s from "./users.module.css";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


const Users = ({
                   users,
                   followUser,
                   unfollowUser,
                   currentPage,
                   pagesCount,
                   counter,
                   setPage,
                   isFetching,
                   followingInProgress
               }) => (
    <div className={s.users}>
        <Paginator setPage={setPage}
                   counter={counter}
                   pagesCount={pagesCount}
                   currentPage={currentPage}
        />
        {users.map(user => (
            <User
                key={user.id}
                user={user}
                isFetching={isFetching}
                unfollowUser={unfollowUser}
                followingInProgress={followingInProgress}
                followUser={followUser}
            />
        ))}
    </div>
)

export default Users;
