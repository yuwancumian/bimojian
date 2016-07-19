import React from 'react'
import ContactBar from './components/ContactBar'
import InfoIntro from './components/InfoIntro'
import InfoKeyword from './components/InfoKeyword'
import DisqusThread from 'react-disqus-thread'

const  About = React.createClass({
    getInitialState() {
        return {

        }
    },
    handleNewComment: function(comment) {
        console.log(comment.text);
    },
    render() {
        return (
            <div className="about">
                <div className="center">

                    <h4>关于关于关于</h4>
                    <DisqusThread
                        shortname="bimojian"
                        title="Example Thread"
                        onNewComment={this.handleNewComment}/>
                </div>
                <div className="info-area" style={{borderLeft: '1px solid #eee'}}>
                </div>
            </div>
        )
    }
})

module.exports = About
