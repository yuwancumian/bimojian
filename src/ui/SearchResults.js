import React from 'react'
import ResultItem from './ResultItem'
import Loading from 'react-loading'

const SearchResults = (props) => {
    console.log(props)
    if(!props.articles) {
        return (
            <div>
                 <Loading type='bubbles' color='#e3e3e3' />
            </div>
        )
    }
    
    const resultItems = props.articles.map((article) => {
        return <ResultItem article = {article} />
    })

    return (
        <ul className="search-results">
            {resultItems}
        </ul>
    )
}

export default SearchResults
