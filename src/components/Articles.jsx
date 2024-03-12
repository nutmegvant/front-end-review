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
        return <header>LOADING</header>;
    } else {
        return(
            <div>
                <h1>Articles</h1>
                {articles.map((article) => {

                    return <ArticleCard article_title = {article.title} article_id={article.article_id} />
                })}
            </div>
        )

            
    }
        
    
}

export default Articles;