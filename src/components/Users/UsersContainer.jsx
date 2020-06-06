import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Prelodaer";
import {connect} from "react-redux";
import {
    toggleFollowingProgress,
    getUsersThunkCreater,
    pageChangeThunkCreater,
    followThunkCreater
} from "../../redux/usersReducer";
import {compose} from "redux";
import {withAuthRedirectHOC} from "../hoc/AuthRedirect";

class UsersContainer extends React.Component {
    state = {
        counter: 1
    };

    componentDidMount() {
        const {getUsersThunkCreater} = this.props
        getUsersThunkCreater()
    }

    onPageChanged = () => {
        const {pageSize, pageChangeThunkCreater} = this.props;
        const {counter} = this.state;

        pageChangeThunkCreater(counter, pageSize)
    };

    setPage = ({target: {innerHTML}}) => {
        if (innerHTML === "prev") {
            this.setState({counter: this.state.counter - 1});
        } else {
            this.setState({counter: this.state.counter + 1});
        }
    };

    componentDidUpdate(props, state) {
        state !== this.state && this.onPageChanged();
    }

    followUser = (id) => {
        const {followThunkCreater} = this.props

        followThunkCreater(id, 'post', true)
    }

    unfollowUser = (id) => {
        const {followThunkCreater} = this.props

        followThunkCreater(id, 'delete', false)
    }

    render() {
        const {
            pageSize,
            totalUsersCount,
            isFetching
        } = this.props;
        let pagesCount = Math.ceil(totalUsersCount / pageSize);


        return (
            <>
                {isFetching ? (
                    <Preloader/>
                ) : (
                    <Users
                        {...this.props}
                        followUser={this.followUser}
                        unfollowUser={this.unfollowUser}
                        counter={this.state.counter}
                        setPage={this.setPage}
                        pagesCount={pagesCount}

                    />
                )}
            </>
        );
    }
}

const mapStateToProps = ({
                             userReducer: {users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress}
                         }) => ({users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress});

const mapDispatchToProps = {
    toggleFollowingProgress,
    getUsersThunkCreater,
    pageChangeThunkCreater,
    followThunkCreater
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirectHOC)(UsersContainer)


