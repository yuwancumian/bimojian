import React, { Component } from 'react';
import portfolio from '../../data/portfolio';
import ClassicItem from './ClassicItem';
import QueueAnim from 'rc-queue-anim';
import Http from '../lib/httpService';
import Loading from 'react-loading';

const Case = React.createClass({
    getInitialState() {
        return {
            data: []
        }
    },
    componentWillMount() {
        Http.getClassic()
        .then(function(data){
            this.setState({data: data})
            sessionStorage.setItem('posts', JSON.stringify(data))
        }.bind(this))
    },
    render() {
        if(this.state.data.length<1){
            return (
                <div className="loading">
                     <Loading type='bubbles' color='#e3e3e3' />
                </div>
            )
        };
        const CaseItems = this.state.data.map(function(item,index){
            return (
                <ClassicItem
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
                <QueueAnim delay={500} duration={[1000,1000]}className="case-list">
                    {CaseItems}
                </QueueAnim>
            </div>
        )
    }
});


export default Case;
