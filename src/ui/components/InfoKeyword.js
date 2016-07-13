import React from 'react';

const InfoKeyword = React.createClass({
    render() {
        return (
			<div className="info-keyword">
				<ul>
					<li>
						<b>作品名稱：</b>
						<span>{this.props.name}</span>
					</li>
					<li>
						<b>作    者：</b>
						<span>{this.props.author}</span>
					</li>
					<li>
						<b>作品規格：</b>
						<span>{this.props.spec}</span>
					</li>
					<li>
						<b>作品朝代：</b>
						<span>{this.props.period}</span>
					</li>
				</ul>
			</div>
        );
    }
});

module.exports = InfoKeyword;
