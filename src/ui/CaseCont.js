import React from 'react';
import LinkNav from './components/LinkNav';
import LinkArticle from './components/LinkArticle';
import ContactBar from './components/ContactBar';
import InfoIntro from './components/InfoIntro';
import InfoKeyword from './components/InfoKeyword';
import Http from '../lib/httpService';
import Loading from 'react-loading';
import className from 'classnames';

const  CaseCont= React.createClass({
    getInitialState() {
        return {
            data: {
                content:{
                    rendered: ''
                }
            },
            display: true
        }
    },
    toggleMenu() {
        this.setState({
            display: !this.state.display
        })
        console.log(this.state.display);
    },
    componentDidMount (){
        var id = this.props.params.id
        var url = '/posts/'+id
        console.log(url);
        Http.getItem(url)
        .then(function(data){
            this.setState({data: data})
        }.bind(this));
    },
    render() {
        if (this.state.data.content.rendered ===""){
            return (
                <div className="loading">
                     <Loading type='bubbles' color='#e3e3e3' />
                </div>
            )
        }
        var infoAreaClass = className({
            'info-area': true,
            'disapear': !this.state.display
        })
        return (
        	<div className="content">

        		<div className="center">
                    {/**<a href="#" className="toggle-btn" onClick={this.toggleMenu} title="切换"> <img src={require('../images/icon-toggle.png')} alt="" /></a>**/}
                    <div className="cont-title">
                        {this.state.data.title.rendered}
                    </div>
                    <div dangerouslySetInnerHTML = {{__html:this.state.data.content.rendered }}  />
        		</div>
                <div className={infoAreaClass}>
        			<ContactBar download_url = {this.state.data.acf.download_url}/>
        			<InfoKeyword
                        name = {this.state.data.acf.name}
                        author = {this.state.data.acf.author}
                        spec = {this.state.data.acf.spec}
                        period = {this.state.data.acf.period}
                    />
        			<InfoIntro excerpt = {this.state.data.excerpt.rendered}/>
        		</div>



        	</div>
        )
  }
});

module.exports = CaseCont;
