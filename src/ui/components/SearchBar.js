import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = { item: ''}
    }

    render() {
        return (
            <div className="input-area">
                <input type="text"
                    value = {this.state.item}
                    onChange = {event => this.onInputChange(event.target.value )}
                    placeholder="eg. 局事帖"/>
            </div>
        )
    }
    onInputChange(item) {
        console.log(item)
        this.setState({item})
        this.props.onSearchItem(item)
    }
}

export default SearchBar
