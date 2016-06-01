import React from 'react';
import LinkNav from './components/LinkNav';
import LinkArticle from './components/LinkArticle';
import ContactBar from './components/ContactBar';
import InfoTitle from './components/InfoTitle';
import InfoKeyword from './components/InfoKeyword';

const  CaseCont= React.createClass({
  render() {
    return (
    	<div className="content">
    		<div className="info-area">
    			<ContactBar />
    			<InfoTitle />
    			<InfoKeyword />	
    		</div>
    		<div className="center">
    			
    		</div>
    		<div className="link-area">
    			<LinkNav />
    			<LinkArticle />
    		</div>
    	</div>
    )
  }
});

module.exports = CaseCont;