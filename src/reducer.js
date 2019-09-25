import uuidv4 from 'uuid/v4';

const createPost = (author, text) => {
    let date = new Date();
    
    const currentDate = date.getDate();
    let currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const currentHour = date.getHours();
    let currentMinutes = date.getMinutes();
    if ( (currentMinutes + '').length === 1 ) {
        currentMinutes = '0' + currentMinutes;
    }

    return  {
        id: uuidv4(),
        postAuthorName: author,
        authorAvatar: './favicon.ico',
        postDate: `${++currentMonth}/${currentDate}, ${currentYear}`,
        postText: text,
        postTime: `${currentHour}:${currentMinutes}`,
        likeCount: 0,
        liked: false,
    };
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
            const posts = [ createPost(action.payload.author, action.payload.text), ...state ];
    
            let storage = JSON.stringify(posts);
            localStorage.setItem('localState', storage);
            return posts;
        
        case 'REMOVE_POST':
            const newState = [...state];
            newState.forEach(post => {
                if (post.id === action.payload.id) {
                    newState.splice(newState.indexOf(post), 1)
                }
            });
       
            // let newStorage = JSON.stringify(newState);
            // localStorage.setItem('localState', newStorage);

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