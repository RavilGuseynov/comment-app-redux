import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './add-post.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class AddPost extends Component {

    state = {
        author: '',
        text: ''
    };

    setName = (newAuthor) => {
        let author = this.state.author;
        author = newAuthor;

        this.setState({ author });
    };

    setText = (newText) => {
        let text = this.state.text;
        text = newText;

        this.setState({ text });
    };

    clearState = () => {
        let { author, text } = this.state;
        author = '';
        text = '';
        this.setState({ author, text });
    };

    // formValidator = (author, text) => {
    //     const addPostHandler = this.props.addPostHandler;
    //     if (author === '' || text === '') {
    //         alert('Заполните все поля!')
    //     }
    //     else {
    //         addPostHandler(author, text);
    //         this.clearState();
    //     }
    // };

    addPostHandler = (e) => {
        e.preventDefault();
        const newPostAuthor = this.state.author;
        const newPostText = this.state.text;
        this.props.addPost(newPostAuthor, newPostText);
        this.clearState()
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

// AddPost.propTypes = {
//     addPostHandler: PropTypes.func.isRequired
// }

const mapStateToProps = (state) => {
    return {
        posts: state
    }
};

export default connect(mapStateToProps, actions)(AddPost);