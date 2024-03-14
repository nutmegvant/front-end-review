import {useState, useEffect} from 'react';
import {getArticles} from '../api'
import ArticleCard from './ArticleCard';

function Articles () {

    const [articles, setArticles] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    },[])

    if(isLoading)  {
        return (
            <>
            <div className="loading-div">
            <h1>Loading...</h1>
            </div>
            <img className="loading-gif" src="https://i.pinimg.com/originals/ef/03/b0/ef03b0a4a976cd31d660d0879d326592.gif">
            </img>
            </>)
    } else {
        return(
            <>
            <div id="article-list">
                <h1>Articles</h1>
                {articles.map((article) => {
                    return <ArticleCard key={article.title} article_title = {article.title} article_id={article.article_id} />
                })}
            </div>
            <img className="article-img" src="https://jottedbyjena.files.wordpress.com/2020/07/lhjkb.gif"/>
            </>
        )
    }
}

export default Articles;