import {addPostActionCreater, deletePostActionCreater}  from '../redux/profileReducer'
import profileRedcuer from '../redux/profileReducer'

let state = {
    posts: [
        {id: 1, post: "Hi, how are you?", like: 3},
        {id: 1, post: "It's my first post", like: 32}
    ]
}


it('new post should be added', () => {
    let action = addPostActionCreater('hi');

    let newState = profileRedcuer(state, action)

    expect(newState.posts.length).toBe(3)
})


it('new post should be added like this', () => {
    let action = addPostActionCreater('hi');

    let newState = profileRedcuer(state, action)

    expect(newState.posts[2].post).toBe('hi')
})


it('decrement length of posts array', () => {
    let action = deletePostActionCreater(3);

    let newState = profileRedcuer(state, action)

    expect(newState.posts.length).toBe(2)
})