import React from 'react'
import ContactBar from './components/ContactBar'
import InfoIntro from './components/InfoIntro'
import InfoKeyword from './components/InfoKeyword'
import DisqusThread from 'react-disqus-thread'

const  About = React.createClass({
    handleNewComment: function(comment) {
        console.log(comment.text);
    },
    render() {
        return (
            <div className="about">
                <div className="center">
                    <div>
                        <p><img src={require('../images/about.jpg')} alt=""/></p>
                        <h4>关于</h4>
                        五千多年前，象征黎明曙光的第一个汉字出现了，文字在天地之间被创造出来，在动物骨骸、金属、石头、竹简、纸帛上被记录下来，在各个朝代以或沉重朴厚，或飞扬婉转，或森严宏大，或肆意狂放的书写线条，完成了每个时代美学最集中的表现。到了现代，汉字不曾消失、不肯遗忘，更将拥有悠长丰沛的活力。
                    </div>
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
