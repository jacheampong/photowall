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