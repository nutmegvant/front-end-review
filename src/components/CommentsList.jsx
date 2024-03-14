
import {  getCommentsByArticleId } from '../api';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import NewCommentForm from './NewCommentForm';


function CommentsList (){
    let { article_id } = useParams();
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    function fetchData(){
        getCommentsByArticleId(article_id)
        .then((comments) => {
            setComments(comments)
            setIsLoading(false)
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
                <div>
                    <NewCommentForm fetchData={fetchData}/>
                </div>
                <div key="comment-list">
                    <p className="big-comments">Comments:
                    </p> 
                    {comments.sort(({comment_id:a}, {comment_id:b}) => b-a).map((comment) => {
                        return (
                        <div className="comment-div">
                            <p className="p-author">{comment.author}</p>
                            <p className="p-body">{comment.body}</p>
                        </div>
                        )
                    })}
                </div>
            </>
            )
    }
}

export default CommentsList;