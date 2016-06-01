import React, { Component } from 'react';
import portfolio from '../../data/portfolio';
import CaseItem from './CaseItem';
import { QueueAnim } from 'antd';

const Case = React.createClass({
    render() {
        const CaseItems = portfolio.map(function(item,index){
            return (
                <CaseItem 
                    key = {index} 
                    name = {item.name} 
                    description = {item.description}
                    thumbnail = {item.thumbnail}
                    url = {item.url}
                />
            ) 
        });
        return (
            <div className="case">
                <div className="case-list">
                     <QueueAnim delay={500} style={{ height: 150 }}>
                        {CaseItems}     
                    </QueueAnim>     
                </div>
            </div>
        )
    }
});


export default Case;
