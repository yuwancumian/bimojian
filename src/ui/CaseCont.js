import React from 'react';
import LinkNav from './components/LinkNav';
import LinkArticle from './components/LinkArticle';
import ContactBar from './components/ContactBar';
import InfoTitle from './components/InfoTitle';
import InfoKeyword from './components/InfoKeyword';
import Http from '../lib/httpService';

const  CaseCont= React.createClass({
    getInitialState() {
        return {
            data: {
                content:{
                    rendered: "loading..."
                }
            }
        }
    },
    componentDidMount (){
        var id = this.props.params.id
        var url = '/posts/'+id
        console.log(url);
        Http.get(url)
        .then(function(data){
            this.setState({data: data})
        }.bind(this));
    },
  render() {
    return (
    	<div className="content">

    		<div className="center">
                <div  dangerouslySetInnerHTML = {{__html:this.state.data.content.rendered }}  />
    		</div>
            <div className="info-area">
    			<ContactBar />
    			<InfoTitle />
    			<InfoKeyword />
                <LinkArticle />
    		</div>

    	</div>
    )
  }
});

module.exports = CaseCont;
