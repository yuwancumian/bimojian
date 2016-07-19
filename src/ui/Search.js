import React, { PropTypes,Component } from 'react'
import Http from '../lib/httpService'
import SearchResults from './SearchResults'
import SearchBar from './components/SearchBar'
import Loading from 'react-loading'

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = { articles: '',loading: true}
        this.handleSearch('局事')
    }

    handleSearch(item){
        Http.search(item)
        .then(function(data){
            this.setState({articles: data,loading: false,keyword: item})
        ,function(error){
            console.log(error);
        }}.bind(this))
    }


    render () {
        const style = {
            width: 64,
            margin: 'auto'
        }
        if (this.state.loading) {
            return (
                <div className="search">
                    <SearchBar onSearchItem = {item => this.handleSearch(item)}/>
                    <div style={style}>
                        <Loading type='bubbles' color='#e3e3e3' />
                    </div>
                </div>
            )
        }

        if(!this.state.loading && this.state.articles.length < 1) {
            return (
                <div className="search">
                    <SearchBar onSearchItem = {item => this.handleSearch(item)}/>
                    <div className="no-result"> 找不到 {this.state.keyword} 的相关结果</div>
                </div>
            )
        }

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
