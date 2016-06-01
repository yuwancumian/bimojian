import React from 'react';

const InfoKeyword = React.createClass({
    render() {
        return (
			<div className="info-keyword">
				<ul>
					<li>
						<b>制作周期</b>
						<span>2个月</span>
					</li>
					<li>
						<b>服务客户</b>
						<span>撒旦范德萨防盗</span>
					</li>
					<li>
						<b>项目简介</b>
						<span>德芙</span>
					</li>
					<li>
						<b>制作时间</b>
						<span>2015.3.12</span>
					</li>
				</ul>
			</div>	
        );
    }
});

module.exports = InfoKeyword;