import { useParams } from 'react-router-dom';
import { getArticleById } from '../api';
import { useState, useEffect } from 'react'
import { getCommentsByArticleId } from '../api';


function SingleArticle (){
    let { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticleById(article_id).then((article) => {
            console.log(article)
            setArticle(article)
            setIsLoading(false)
        })        
        getCommentsByArticleId(article_id).then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
    },[])

    if(isLoading)  {
        return <div className="loading-div">LOADING!!!</div>;
    } else {
        return(
            <div>
                <h1 className="single-article-title">{article.title}</h1>
                <p className="single-article-author">By: {article.author}</p>
                <p className="single-article-body">{article.body}</p>
                <div>
                    <p className="big-comments">Comments:
                    </p> 
                    {comments.map((comment) => {
                        return (
                        <>
                        <div className="comment-div">
                            <p className="p-author">{comment.author}</p>
                            <p className="p-body">{comment.body}</p>
                        </div>
                        </>
                        )
                    })}
                </div>
            </div>
            )
                
        }
}

export default SingleArticle;
