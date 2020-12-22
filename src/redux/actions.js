import {database} from '../db/config'

export const addPostToDatabase = (post) => {
    return (dispatch) => {
        return database.ref('post').update({
            [post.id]: post,
        }).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

// load data from firebase DB
export const loadPostFromDB = () => {
    return (dispatch) => {
        return database.ref('post')
            .once('value')
            .then((snapshot) => {
                let posts = []
                snapshot.forEach((childSnapshot) => {
                    posts.push(childSnapshot.val())
                })
                dispatch(loadPosts(posts))
            }).catch((error) => {
                console.log(error)
            })
    }
}

export const startRemovePost = (index, id) => {

    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    }
    return (dispatch) => {
        return database.ref().update(updates)
            .then(() => {
                dispatch(removePost(index))
            })
            .catch((error) => {
                console.log(error)
            })
    }

}

export const startAddingComment = (comment, postId) => {
    return (dispatch) => {
        return database.ref(`comments/${postId}`)
            .push(comment)
            .then(() => {
                dispatch(addComment(comment, postId))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const startLoadingComments = () => {
    return (dispatch) => {
        return database.ref('comments').once('value')
            .then((snapshot) => {
                let comments = {}
                snapshot.forEach((childSnapshot) => {
                    comments[childSnapshot.key] = Object.values(childSnapshot.val())
                })
                dispatch(loadComments(comments))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const loadComments = (comments) => {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}


export const loadPosts = (posts) => {
    return {
        type: 'LOAD_POSTS',
        posts,
    }
}

// remove
export const removePost = (index) => {
    return {
        type: 'REMOVE_POST',
        index,
    }
}

// adding post
export const addPost = (post) => {
    console.log('I addPost ...')
    return {
        type: 'ADD_POST',
        post,
    }
}

export const addComment = (comment, postId) => {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}