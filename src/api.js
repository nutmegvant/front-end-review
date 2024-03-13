import axios from 'axios'

const api = axios.create({
    baseURL: 'https://nc-news-backend-project-r4b1.onrender.com/api'
});

function getArticles () {
    return api.get('articles')
    .then((response) => {
        return response.data.articles
    })
}

function getArticleById (article_id) {
    return api.get(`articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
}

function getCommentsByArticleId (article_id) {
    return api.get(`articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments
    })
}

function updateVotes (article_id, inc_votes) {
    console.log(article_id, 'article id')
    console.log(inc_votes,  'incvotes')
    return api.patch(`articles/${article_id}`, {inc_votes: inc_votes})
    .then((response) => {
        console.log(response.data.article)
        response.data.article
    })
}

export {getArticles, getArticleById, getCommentsByArticleId, updateVotes }