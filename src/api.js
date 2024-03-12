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

export {getArticles, getArticleById, getCommentsByArticleId}