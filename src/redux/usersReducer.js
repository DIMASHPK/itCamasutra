import {api} from "../api/api";

const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE_INCREMENT";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_iS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
    users: [
        {
            id: 1,
            followed: true,
            name: "Shupyk Dmitry",
            status: "I`m a boss",
            location: {city: "Chernihiv", country: "Ukraine"},
            photos: {
                small:
                    "https://memepedia.ru/wp-content/uploads/2019/06/dima-mihno-pepsi.png"
            }
        },
        {
            id: 2,
            followed: true,
            name: "Dushenok Daria",
            status: "I`m a girlfriend boss",
            location: {city: "Chernihiv", country: "Ukraine"},
            photos: {
                small: "https://i.ytimg.com/vi/aAJgRoXfY-8/maxresdefault.jpg"
            }
        },
        {
            id: 3,
            followed: false,
            name: "Molosh Alexander",
            status: "I`m a friend boss",
            location: {city: "Chernihiv", country: "Ukraine"},
            photos: {
                small:
                    "https://cs5.pikabu.ru/images/big_size_comm/2014-06_5/1403524886751.jpg"
            }
        },
        {
            id: 4,
            followed: false,
            name: "Demeshko Stanislav",
            status: "I`m a friend boss",
            location: {city: "Chernihiv", country: "Ukraine"},
            photos: {
                small:
                    "https://www.meme-arsenal.com/memes/61eb472f8a3fb383468826a43487a507.jpg"
            }
        }
    ],
    pageSize: 10,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const userReducer = (state = initialState, {type, userId, users, followed, currentPage, totalUsersCount, isFetching, bool, id}) => {
    switch (type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === userId ? {...user, followed} : user)
            };
        case SET_USERS:
            return {
                ...state,
                users,
            };
        case SET_CURRENT_PAGE:
            return {...state, currentPage};
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: bool
                    ? [...state.followingInProgress, id]
                    : state.followingInProgress.filter(id => id != id)
            };
        default:
            return {...state};
    }
};

export const followUser = (userId, followed) => ({type: FOLLOW, userId, followed});

export const setUser = users => ({type: SET_USERS, users});

export const setPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalCount = totalUsersCount => ({type: SET_TOTAL_COUNT, totalUsersCount});

export const toggleFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowingProgress = (bool, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, bool, id});

/*thunks*/
export const getUsersThunkCreater = () => (dispatch) => {
    dispatch(toggleFetching(true));

    api.getUsers().then(res => {
        dispatch(toggleFetching(false));
        dispatch(setUser(res.items));
        dispatch(setTotalCount(res.totalCount));
    });
}

export const pageChangeThunkCreater = (counter, pageSize) => (dispatch) => {
    dispatch(toggleFetching(true));
    dispatch(setPage(counter));
    api.pageChange(counter, pageSize).then(res => {
        dispatch(toggleFetching(false));
        dispatch(setUser(res.items));
    });
}

export const followThunkCreater = (id, method, followed) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    api.followUser(id, method).then(res => {
        if (res.resultCode === 0) {
            dispatch(followUser(id, followed))
        }
        dispatch(toggleFollowingProgress(false, id))
    });
}

export default userReducer;
