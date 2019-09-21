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

    const newPost = {
        id: uuidv4(),
        postAuthorName: author,
        authorAvatar: './favicon.ico',
        postDate: `${++currentMonth}/${currentDate}, ${currentYear}`,
        postText: text,
        postTime: `${currentHour}:${currentMinutes}`,
        likeCount: 0,
        isLiked: false,
    }

    return newPost
}

const reducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_POST':        
            const posts = [createPost(action.payload.author, action.payload.text), ...state];
    
            let storage = JSON.stringify(posts);
            localStorage.setItem('localState', storage);
            return posts
        
        case 'REMOVE_POST':
            const newState = [...state];
            newState.forEach(post => {
                if (post.id === action.payload.postId) {
                    posts.splice(posts.indexOf(post), 1)
                }
            })
       
            let newStorage = JSON.stringify(newState);
            localStorage.setItem('localState', newStorage);

            return newState
        
        default:
            return state
    }

}

export default reducer;