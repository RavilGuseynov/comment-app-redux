import uuidv4 from 'uuid/v4';

const createPost = (author, text) => {
    let date = new Date();
    
    const currentMinutes = date.getMinutes() < 10 ? date.getMinutes() + 1 : date.getMinutes();

    return  {
        id: uuidv4(),
        postAuthorName: validateText(author),
        authorAvatar: './favicon.ico',
        postDate: `${1 + date.getMonth()}/${date.getDate()}, ${date.getFullYear()}`,
        postText: validateText(text),
        postTime: `${date.getHours()}:${currentMinutes}`,
        likeCount: 0,
        liked: false,
    };
};

const validateText = (value) => {
    return value
        .replace(/<!--/g, '')
        .replace(/-->/g, '')
        .replace(/(<(\/?[^>]+)>)/g, '');
};

const likePost = (post) => {
    post.likeCount++;
    post.liked = !post.liked;
};

const dislikePost = (post) => {
    post.likeCount--;
    post.liked = !post.liked;
};

const reducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_POST':        
            return [ createPost(action.payload.author, action.payload.text), ...state ];
        
        case 'REMOVE_POST':
            const newState = [...state];
            newState.forEach(post => {
                if (post.id === action.payload.id) {
                    newState.splice(newState.indexOf(post), 1)
                }
            });

            return newState;

        case 'TOGGLE_LIKE':
            const currentState = [...state];
            currentState.forEach(post => {
                if (post.id === action.payload.id) {
                    !post.liked ? likePost(post) : dislikePost(post);
                }
            });

            return currentState;

        default:
            return state
    }

};

export default reducer;