import { useParams } from 'react-router-dom';
import { getArticleById, updateVotes } from '../api';
import { useState, useEffect } from 'react'
import CommentsList from './CommentsList';


function SingleArticle (){
    let { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [articleVotes, setArticleVotes] = useState()
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [votesError, setVotesError] = useState(false)
    const [articleError, setArticleError] = useState(false)

    useEffect(() => {
        getArticleById(article_id).then((article) => {
            setArticleVotes(article.votes)
            setArticle(article)
            setIsLoading(false)
            .catch(() => {
                setArticleError(true)
            })
        })        
    },[])

    function buttonClick (event){
        let voteValue = 0
        if (event.target.id === "plus-button"){
            voteValue = 1
        }
        else {
            voteValue = -1
        }
        updateVotes(article_id, voteValue)
        .then(() => {
            setVotesError(false)
        })
        .catch(() => {
            setVotesError(true)
        })
        setArticleVotes(articleVotes+voteValue)

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
                    {articleError && (<div className="error-msg">
                    An error occured when loading the article
                    </div>)}
                    <h1 className="single-article-title">{article.title}</h1>
                    <p className="single-article-author">By: {article.author}</p>
                    <p className="single-article-body">{article.body}</p>
                    <p className="single-article-votes">Votes: {articleVotes}</p>
                    <div>
                    <button id="plus-button" className="plus-button" onClick={buttonClick}>+</button>
                    <button id="minus-button" className="minus-button" onClick={buttonClick}>-</button>
                    {votesError && (<div className="error-msg">
                        An error occured when updating the votes
                    </div>)}
                    </div>
                    <div>
                        <CommentsList />
                    </div>
                </div>
            )
                
        }
}

export default SingleArticle;
