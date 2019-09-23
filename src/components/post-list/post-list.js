import Post from '../post';
import React, {Component} from 'react';
import './post-list.css';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PostList extends Component {

    // likeToggle = (postId) => {
    //     const posts = [...this.state.posts];
    //     posts.forEach(post => {
    //         if (post.id === postId) {
    //             if (post.isLiked) {
    //                 post.isLiked = !post.isLiked;
    //                 post.likeCount--
    //             }
    //             else {
    //                 post.isLiked = !post.isLiked;
    //                 post.likeCount++
    //             }
    //         }
    //     })
    //     this.setState({ posts })

    //     let storage = JSON.stringify(this.state);
    //     localStorage.setItem('localState', storage);
    // }
    

    render() {
        console.log(this.props);
        
        const postList = this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <Post 
                        post={post} 
                    />
                </div>
            )
        });
        return (
            <div className="container">
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
};

export default connect(mapStateToProps, actions)(PostList);
