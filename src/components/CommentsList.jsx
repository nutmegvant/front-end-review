
import {  getCommentsByArticleId } from '../api';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';



function CommentsList (){
    let { article_id } = useParams();
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getCommentsByArticleId(article_id).then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
    },[])

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
                <div>
                    <p className="big-comments">Comments:
                    </p> 
                    {comments.map((comment) => {
                        return (
                        <>
                        <div key="comment-key" className="comment-div">
                            <p key="author-key" className="p-author">{comment.author}</p>
                            <p key="body-key" className="p-body">{comment.body}</p>
                        </div>
                        </>
                        )
                    })}
                </div>
            )
                
        }
}

export default CommentsList;