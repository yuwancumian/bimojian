import React from 'react';
import list from '../../data/portfolio.json';

const  About= React.createClass({
    getInitialState() {
        console.log(list);
        return {
              
        };
    },
    render() {
        return (
            <h3> about</h3>            
        );
    }
});

module.exports = About;
