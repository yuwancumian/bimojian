import React from 'react';
import { Link } from 'react-router';

const  ClassicItem= React.createClass({
    render() {
        return (
			<div className="case-item">

                <Link to={'/classic/'+ this.props.id}>
                    <img src={this.props.thumbnail} alt=""/>
                </Link>
                <h4>{this.props.name}</h4>
            </div>

        );
    }
});

module.exports = ClassicItem;
