import React from "react";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import photo from "../../assets/user.png";
import {
    addPostActionCreater,
    getUserThunkCreater,
    getStatusThunkCreater,
    updateStatusThunkCreater
} from "../../redux/profileReducer";
import { withAuthRedirectHOC} from "../hoc/AuthRedirect";
import {compose} from "redux";
import {reset} from "redux-form";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const {
            match: {
                params: {userId}
            },
            getUserThunkCreater,
            getStatusThunkCreater,
            id
        } = this.props;

        getUserThunkCreater(userId || id)
        getStatusThunkCreater(userId|| id)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {
            match: {
                params: {userId}
            },
            getUserThunkCreater,
            id
        } = this.props;

        if(userId !== prevProps.match.params.userId){
            getUserThunkCreater(id)
        }
    }

    render() {
        const {profile} = this.props;
        let contacts =
            profile.hasOwnProperty("contacts") &&
            Object.entries(profile.contacts).slice(0, 4);

        return (
            <Profile
                {...this.props}
                avatar={
                    !profile && !profile.photos.small ? profile.photos.small : photo
                }
                contacts={contacts}
            />
        );
    }
}

let mapStateToProps = ({
                           authReducer: {id},
                           profile_reducer: {posts, src, profile, isFetching, status}
                       }) => ({
    posts,
    src,
    profile,
    isFetching,
    status,
    id
});

let mapDispatchToProps = {
    addPostActionCreater,
    getUserThunkCreater,
    getStatusThunkCreater,
    updateStatusThunkCreater,
    reset
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirectHOC
)
(ProfileContainer)



