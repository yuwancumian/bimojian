import React from 'react'
import ResultItem from './ResultItem'
import Loading from 'react-loading'
import Link from 'react-router'

const SearchResults = (props) => {
    console.log(props)
    if(!props.articles) {
        console.log('1' + props.articles + '2')
        return (
            <div>
                 <Loading type='bubbles' color='#e3e3e3' />
            </div>
        )
    }

    const resultItems = props.articles.map((article,index) => {
        return <ResultItem article = {article} key = {index}/>
    })

    return (
        <ul className="search-results">
            {resultItems}
        </ul>
    )
}

export default SearchResults
