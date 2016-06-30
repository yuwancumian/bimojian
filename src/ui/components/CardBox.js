import React from 'react';

class CardBox extends React.Component {

    render() {
        return (
            <div className = "card-box">
                {/*<div className = "card-info">
                    <h3>{this.props.title}</h3>
                </div>*/}
                <div className="card-img">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

export default CardBox;
