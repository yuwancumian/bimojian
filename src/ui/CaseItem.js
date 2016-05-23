import React from 'react';

const  CaseItem= React.createClass({
    render() {
        return (
					<div className="case-item">
              <a href="">
                  <img src="" alt=""/>
              </a>
              <h3>{this.props.name}</h3>
              <p style={{fontSize: 16}}>{this.props.description}</p>
          </div>						
        );
    }
});

module.exports = CaseItem;