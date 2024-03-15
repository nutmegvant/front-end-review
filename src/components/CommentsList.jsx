
import {  getCommentsByArticleId, deleteComment } from '../api';
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import NewCommentForm from './NewCommentForm';
import {UserContext}  from '../context/UserContext';


function CommentsList (){
    let { article_id } = useParams();
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { loggedUser } = useContext(UserContext);
    const [deleteError, setDeleteError] = useState(false)
    const [commentLoadError, setCommentLoadError] = useState(false)

    function fetchData(){
        getCommentsByArticleId(article_id)
        .then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
        .catch(() => {
            setCommentLoadError(true)
        })
    }

    function handleDelete (comment_id){
        deleteComment(comment_id)
        .catch(() => {
            setDeleteError(true)
        })
    }

    useEffect(() => {
        fetchData()
    },[fetchData])

    if(isLoading)  {
        return (<>
            <div key="loading-key" className="loading-div">
            <h1>Loading...</h1>
            </div>
            <img className="loading-gif" src="https://i.pinimg.com/originals/ef/03/b0/ef03b0a4a976cd31d660d0879d326592.gif">
            </img>
            </>
            )
    } else {
        return(
                <>
                {commentLoadError && (<div className="error-msg">
                    An error occured when loading comments
                    </div>)}
                    <div>
                        <NewCommentForm fetchData={fetchData}/>
                    </div>
                    <div key="comment-list">
                        <p className="big-comments">Comments:
                        </p> 
                        {comments.sort(({comment_id:a}, {comment_id:b}) => b-a).map((comment) => {
                            let allowDelete = false
                            if (loggedUser !== null && loggedUser.username === comment.author){
                                allowDelete = true
                            }
                            return (
                            <div className="comment-div">
                                <p className="p-author">{comment.author}</p>
                                <p className="p-body">{comment.body}</p>
                                {allowDelete && <button className="delete-button" onClick={()=>handleDelete(comment.comment_id)}>Delete 🗑️</button>}
                                {deleteError && (<div className="error-msg">
                                        An error occured when deleting a comment
                                    </div>)}
                            </div>
                            )
                        })}
                    </div>
                </>
            )
    }
}

export default CommentsList;