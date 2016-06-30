import React from 'react';
import ContactBar from './components/ContactBar';
import InfoIntro from './components/InfoIntro';
import InfoKeyword from './components/InfoKeyword';

const  About = React.createClass({
    getInitialState() {
        return {

        };
    },
    render() {
        return (
            <div className="about">
                <div className="center">

                </div>
                <div className="info-area">
                    <ContactBar />
                    <InfoKeyword />
                    <InfoIntro />
                </div>
            </div>
        );
    }
});

module.exports = About;
