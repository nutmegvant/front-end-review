import {postComment} from '../api';
import {useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import {UserContext}  from '../context/UserContext';
import {Link} from 'react-router-dom'



function NewCommentForm ({fetchData}){
    let { article_id } = useParams();
    const { loggedUser } = useContext(UserContext);
    const [newComment, setNewComment] = useState('');

    function handleSubmit (event) {
        event.preventDefault();
        postComment(article_id, loggedUser.username, newComment)
        setNewComment('')
        fetchData()
    }

    function handleComment(event) {
        setNewComment(event.target.value)
    }

    if(loggedUser === null ){
        return (
            <div className="click-here">
                Please click 
                <Link className="nav-link1" to='/login'> HERE </Link>
                to log in to add a comment
            </div>
        )
    } else {
        return <>
    <p className="form-title">Add your own opinion</p>
    <form className="comment-form" onSubmit={handleSubmit}>
        <div>
            <label className="comment-username"> Username: {loggedUser.username}
            </label>
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
}

export default NewCommentForm;