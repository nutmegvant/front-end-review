import {postComment} from '../api';
import {useState} from 'react';
import { useParams } from 'react-router-dom';

function NewCommentForm (){
    let { article_id } = useParams();
    const [newComment, setNewComment] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit (event) {
        event.preventDefault();
        postComment(article_id, username, newComment)
    }

    function handleUsername (event) {
        setUsername(event.target.value)
    }

    function handleComment(event) {
        setNewComment(event.target.value)
    }

    return <>
    <p className="form-title">Add your own opinion</p>
    <form className="comment-form" onSubmit={handleSubmit}>
        <div>
            <label className="comment-username"> Username: 
            </label>
            <input className="username-input" type="text" name="user-name" value={username} placeholder='Enter username here...' onChange={handleUsername}/>
        </div>
        <div>
            <label className="comment-comment"> Comment: 
            </label>
            <input className="comment-input" type="text" name="comment" value={newComment} placeholder='Enter comment here...' onChange={handleComment}/>
        </div>
        <div>
            <button className="add-comment-button" type="submit" value="Submit" onClick={handleSubmit}>Add 🐾</button>
        </div>
        <img src="https://media.tenor.com/KiQ71OnI4Q8AAAAM/pusheen-fast.gif"/>
    </form>
    </>
}

export default NewCommentForm;