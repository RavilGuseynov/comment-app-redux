import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './add-post.css';
import { connect } from 'react-redux';
import { addPost } from '../../actions';

class AddPost extends Component {

    state = {
        author: '',
        text: ''
    };

    setName = (newAuthor) => this.setState({ author: newAuthor });

    setText = (newText) => this.setState({ text: newText });

    clearState = () => this.setState({ author: '', text: '' });

    validator = () => {
        return !!(this.state.author && this.state.text)
    };

    addPostHandler = (e) => {
        e.preventDefault();
        if (this.validator()) {
            const newPostAuthor = this.state.author;
            const newPostText = this.state.text;
            this.props.addPost(newPostAuthor, newPostText);
            this.clearState();
        } else {
            alert('Заполните все поля!');
        }
    };


    render() {
        
        return (
            <div id="add-post">
                <form
                    id="add-post-form"
                    onSubmit={this.addPostHandler}
                >
                    <h3>Добавить новый пост</h3>
                    <div className="comment-author-input">Введите ваше имя</div>
                    <input type="text" id="add-post-input-name" 
                        onChange={() => this.setName(document.getElementById('add-post-input-name').value)}
                        value={this.state.author}
                    />
                    <div className="comment-author-input">Введите текст</div>
                    <textarea
                        id="add-post-input-text"
                        onChange={() => this.setText(document.getElementById('add-post-input-text').value)}
                        value={this.state.text}
                    >
                    </textarea>
                    <button 
                        id="add-post-button"
                    >
                    Добавить</button>
                </form>
            </div>
        )
    }    
}

AddPost.propTypes = {
    addPost: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (author, text) => dispatch(addPost(author, text))
    }
};

export default connect(null, mapDispatchToProps)(AddPost);