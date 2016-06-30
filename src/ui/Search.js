import React, { PropTypes,Component } from 'react'
import Http from '../lib/httpService'
import SearchResults from './SearchResults'
import SearchBar from './components/SearchBar'

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = { item: ''}
        this.handleSearch('局事')
    }

    handleSearch(item){
        Http.search(item)
        .then(function(data){
            console.log(data)
            this.setState({articles: data})
        }.bind(this))
    }

    render () {

        return (
            <div className="search">
                <SearchBar onSearchItem = {item => this.handleSearch(item)}/>
                <div>
                    <SearchResults articles = {this.state.articles} />
                </div>
            </div>
        )
    }
}

export default Search
