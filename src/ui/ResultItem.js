import React from 'react'

const ResultItem = (props) => {
    const article = props.article
    return (
        <li>
            <a href="">{article.title.rendered} <span className="author">作者：{article.acf.author}</span></a>
        </li>
    )
}

export default ResultItem
