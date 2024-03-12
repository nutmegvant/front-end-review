import { Link } from 'react-router-dom';

function ArticleCard ({article_title, article_id}) {
    return (
        <Link className="art-card-link" to={`/articles/${article_id}`}>
        <div>
            {article_title}
        </div>
        </Link>
    )
}
export default ArticleCard;

