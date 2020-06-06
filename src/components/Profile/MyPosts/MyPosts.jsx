import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../helpers/validators";
import {TextArea} from "../../common/FormControls/FormControls";


const maxLengthPost = maxLength(10)


const MyPosts = ({
                     handleSubmit,
                     posts,
                     avatar,
                     isFetching,
                     profile,
                     onSubmit
                 }) => (
    <div className={s.myPosts}>
        <h3>My posts</h3>
        <form onSubmit={handleSubmit(onSubmit.bind(this))} className={s.addPost}>
            <Field
                component={TextArea}
                name={'newPost'}
                placeholder={'Your post'}
                rows={3}
                cols={60}
                validate = {[requiredField, maxLengthPost]}
            />
            <button>
                Add post
            </button>
        </form>
        <div className={s.posts}>
            {posts.map((item, i) => (
                <Post
                    message={item.post}
                    likesCount={item.like}
                    key={i}
                    avatar={avatar}
                    isFetching={isFetching}
                    name={profile.fullName}
                />
            ))}
        </div>
    </div>
);


export default reduxForm({form: 'posts'})(MyPosts);
