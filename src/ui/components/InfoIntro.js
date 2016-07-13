import React from 'react';

const InfoIntro = React.createClass({
    render() {
        return (
			<div className="info-intro">
				<h3>作品簡介</h3>
                <div dangerouslySetInnerHTML = {{__html:this.props.excerpt }}>
                </div>

			</div>
        );
    }
});

module.exports = InfoIntro;
