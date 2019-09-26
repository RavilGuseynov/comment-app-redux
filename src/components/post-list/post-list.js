import Post from '../post';
import React, {Component} from 'react';
import './post-list.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PostList extends Component {

    render() {

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

PostList.propTypes = {
    posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(PostList);
