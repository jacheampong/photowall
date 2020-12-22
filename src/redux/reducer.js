import {Posts} from '../model/Posts'

// initializing state valid to post
const postReducer = function post(state = Posts, action) {
    console.log(action.index)

    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return [...state, action.post]
        default:
            return state
    }
}

export default postReducer