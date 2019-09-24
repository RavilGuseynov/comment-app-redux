export const addPost = (author, text) => (
    {
        type: 'ADD_POST',
        payload: {
            author,
            text
        }
    }
);

export const removePost = (id) => (
    {
        type: 'REMOVE_POST',
        payload: {
            id
        }
    }
);