import { useParams } from 'react-router-dom';
import { getArticleById } from '../api';
import { useState, useEffect } from 'react'

function SingleArticle (){
    let { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticleById(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
    },[])

    if(isLoading)  {
        return <header>LOADING</header>;
    } else {
        return(
            <div>
                <h1 id="single-article-title">{article.title}</h1>
                <p id="single-article-body">{article.body}</p>
                </div>
            )
                
        }
}

export default SingleArticle;