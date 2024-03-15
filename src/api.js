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
    return api.patch(`articles/${article_id}`, {inc_votes: inc_votes})
    .then((response) => {
        response.data.article
    })
}


function postComment (article_id, author, comment) {
    return api.post(`articles/${article_id}/comments`, {author: author, comment: comment})
    .then((response) => {
        response.data.comment
    })
}

function getUsers () {
    return api.get("users")
    .then((response) => {
        return response.data.users
        
    })
}

function deleteComment(comment_id) {
    return api.delete(`comments/${comment_id}`)
}

export {getArticles, getArticleById, getCommentsByArticleId, updateVotes, postComment, getUsers, deleteComment }