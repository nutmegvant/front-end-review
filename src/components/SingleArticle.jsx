import { useParams } from 'react-router-dom';
import { getArticleById, updateVotes } from '../api';
import { useState, useEffect } from 'react'
import CommentsList from './CommentsList';


function SingleArticle (){
    let { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticleById(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })        
    },[article.votes])

    function buttonClick (event){
        if (event.target.id === "plus-button"){
            updateVotes(article_id, 1)
            setArticle(article.votes+=1)
        }
        else {
            updateVotes(article_id, -1)
            setArticle(article.votes-=1)
        }
    }

    if(isLoading)  {
        return (<>
            <div className="loading-div">
            <h1>Loading...</h1>
            </div>
            <img className="loading-gif" src="https://i.pinimg.com/originals/ef/03/b0/ef03b0a4a976cd31d660d0879d326592.gif">
            </img>
            </>
            )
    } else {
        return(
            <div>
                <h1 className="single-article-title">{article.title}</h1>
                <p className="single-article-author">By: {article.author}</p>
                <p className="single-article-body">{article.body}</p>
                <p className="single-article-votes">Votes: {article.votes}</p>
                <button id="plus-button" className="plus-button" onClick={buttonClick}>+</button>
                <button id="minus-button" className="minus-button" onClick={buttonClick}>-</button>
                <div>
                    <CommentsList aritcle_id = {article_id}/>
                </div>
            </div>
            )
                
        }
}

export default SingleArticle;
