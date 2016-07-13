import React from 'react'
import {Link} from 'react-router'

const ResultItem = (props) => {
    const article = props.article
    return (
        <li>
            <Link to={'/classic/'+ article.id}>
                {article.title.rendered} <span className="author">作者：{article.acf.author}</span>
            </Link>
        </li>
    )
}

export default ResultItem
