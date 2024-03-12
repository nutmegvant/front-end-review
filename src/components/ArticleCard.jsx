//import {withRouter} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function ArticleCard ({article_title, article_id}) {
    const navigateTo = useNavigate();

    return (
        <div onClick={() => { console.log(article_id, 'clickedId'); navigateTo(`/articles/${article_id}`)}}>
            Article title: {article_title}
        </div>
    )
}
export default ArticleCard;

