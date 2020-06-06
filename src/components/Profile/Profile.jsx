import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({src, addPostActionCreater, reset, ...props}) => (
    <div>
        <ProfileInfo srcPhoto={src} {...props} />
        <MyPosts onSubmit={({newPost}) => {
            addPostActionCreater(newPost);
            reset('posts')
        }}{...props} />
    </div>
);

export default Profile;
