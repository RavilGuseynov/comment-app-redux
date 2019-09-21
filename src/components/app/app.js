import React, {Component} from 'react';
import AddPost from '../add-post';
import PostList from '../post-list';
import './app.css'

class App extends Component {

    render() {
        return (
            <div>
                <PostList />
                <AddPost />
            </div>
        )
    }
}

export default App;
