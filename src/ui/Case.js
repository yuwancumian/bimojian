import React, { Component } from 'react';
import portfolio from '../../data/portfolio';
import CaseItem from './CaseItem';
import { QueueAnim } from 'antd';
import Http from '../lib/httpService';

const Case = React.createClass({
    getInitialState() {
        return {
            data: []
        }
    },
    componentWillMount() {
        Http.get('/posts?categories=2')
        .then(function(data){
            this.setState({data: data})
        }.bind(this));
    },
    render() {
        console.log(this.state.data);
        const CaseItems = this.state.data.map(function(item,index){
            return (
                <CaseItem
                    key = {index}
                    name = {item.title.rendered}
                    id = {item.id}
                    description = {item.excerpt.rendered}
                    thumbnail = {item.better_featured_image.source_url}
                    // url = {item.url}
                />
            )
        });
        return (
            <div className="case">
                <QueueAnim delay={500} className="case-list">
                    {CaseItems}
                </QueueAnim>
            </div>
        )
    }
});


export default Case;
