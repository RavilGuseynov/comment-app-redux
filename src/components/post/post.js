import React from 'react';
import PropTypes from 'prop-types';
import likesIcon from './like-icon.png';
import authorAvatar from './favicon.ico';
import removePostButton from './delete-comment-button.png';
import './post.css';
import { connect } from 'react-redux';
import { removePost, toggleLike} from '../../actions';

function Post(props) {
    const {post, removePost, toggleLike } = props;

    const removePostHandler = () => {
        removePost(post.id);
    };

    const toggleLikeHandler = () => {
        toggleLike(post.id);
    };

    return (
        <div className="post-item">
            <div className="post-header">
                <img src={authorAvatar} alt="author-avatar" className="post-author-avatar"/>
                <div className="post-author-name">{post.postAuthorName}</div>
                <div className="post-date">{post.postDate}</div>
                <div
                    className="remove-post-button"
                    onClick={removePostHandler}
                >
                    <img
                        src={removePostButton}
                        alt="delete"
                    />
                </div>
            </div>
            <div className="post-text">{post.postText}</div>
            <div className="post-item-props">
                <div className="post-time">{post.postTime}</div>
                <div className="post-props">
                    <img
                        onClick={toggleLikeHandler}
                        src={likesIcon} className="prop-icon" alt=""
                    />
                    <div className="post-prop-count">{post.likeCount}</div>
                </div>
            </div>
        </div>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        postAuthorName: PropTypes.string.isRequired,
        authorAvatar: PropTypes.string.isRequired,
        postDate: PropTypes.string.isRequired,
        postText: PropTypes.string.isRequired,
        postTime: PropTypes.string.isRequired,
        likeCount: PropTypes.number.isRequired,
        liked: PropTypes.bool.isRequired
    }),
    toggleLike: PropTypes.func.isRequired,
    removePost: PropTypes.func.isRequired,
    postList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        postList: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removePost: (id) => dispatch(removePost(id)),
        toggleLike: (id) => dispatch(toggleLike(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
