import React from 'react';
// import PropTypes from 'prop-types';
import likesIcon from './like-icon.png';
import authorAvatar from './favicon.ico';
import removePostButton from './delete-comment-button.png';
import './post.css';

function Post(props) {
    const {post, likeToggle, removePostHandler } = props;
    
    return (
        <div className="post-item">
            <div className="post-header">
                <img src={authorAvatar} alt="author-avatar" className="post-author-avatar" />
                <div className="post-author-name">{post.postAuthorName}</div>
                <div className="post-date">{post.postDate}</div>
                <div 
                    className="remove-post-button"
                    onClick={ev => removePostHandler(post.id)}
                ><img src={removePostButton} alt="delete" /></div>
            </div>
            <div className="post-text">{post.postText}</div>
            <div className="post-item-props">
                <div className="post-time">{post.postTime}</div>
                <div className="post-props">
                    <img
                        onClick={ev => {likeToggle(post.id)}}
                        src={likesIcon} className="prop-icon" alt=""
                    />
                    <div className="post-prop-count">{post.likeCount}</div>
                </div>
            </div>

        </div>
    )
}

// Post.propTypes = {
//     post: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         postAuthorName: PropTypes.string.isRequired,
//         authorAvatar: PropTypes.string.isRequired,
//         postDate: PropTypes.string.isRequired,
//         postText: PropTypes.string.isRequired,
//         postTime: PropTypes.string.isRequired,
//         likeCount: PropTypes.number.isRequired,
//         isLiked: PropTypes.bool.isRequired,
//         commentsCount: PropTypes.number.isRequired,
//         comments: PropTypes.array.isRequired
//     }),
//     postId: PropTypes.number.isRequired,
//     likeToggle: PropTypes.func.isRequired,
//     removePostHandler: PropTypes.func.isRequired,
//     comments: PropTypes.array.isRequired,
//     addCommentHandler: PropTypes.func.isRequired,
//     removeCommentHandler: PropTypes.func.isRequired,
//     commentLikeToggle: PropTypes.func.isRequired
// }

export default Post;
