import React from 'react';
import { Link } from 'react-router';

const  CaseItem= React.createClass({
    render() {
        return (
			<div className="case-item">

                <Link to={'/case/'+ this.props.url}>
                    <img src={this.props.thumbnail} alt=""/>
                </Link>
                <h3>{this.props.name}</h3>
                <p style={{fontSize: 16}}>{this.props.description}</p>
            </div>						
        );
    }
});

module.exports = CaseItem;