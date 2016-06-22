import React from 'react';
import ContactBar from './components/ContactBar';
import InfoTitle from './components/InfoTitle';
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
                    <InfoTitle />
                    <InfoKeyword />
                </div>
            </div>
        );
    }
});

module.exports = About;
