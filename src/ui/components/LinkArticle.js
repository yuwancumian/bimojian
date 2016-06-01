import React from 'react';

const LinkArticle= React.createClass({
    render() {
        return (
        	<div className="link-article">
				<ul>
					<li>
						<a href="">
							<img src={require('../../images/bg-vi.png')} alt=""/>
							<p>dskadsldl</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src={require('../../images/bg-ui.png')} alt=""/>
							<p>年底看的哦</p>
						</a>
					</li>
					<li>
						<a href="">
							<img src="" alt=""/>
							<p>dsfdks ksajkd </p>
						</a>
					</li>
				</ul>
			</div>			
        );
    }
});

module.exports = LinkArticle;