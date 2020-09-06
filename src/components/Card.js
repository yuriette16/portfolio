import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import CardIntroduction from './cards/CardIntroduction'

class Card extends Component {
    render () {
        const { content } = this.props;

        const getTitle = () => {
            if (content === "whoAmI") {
                return "WHO I AM";
            } else if (content === "mySkill") {
                return "What I can do";
            }
        };

        return (

            <div className="card-wrapper">
                <div className="card-title">
                    <div className="card-title-header">{ getTitle() }</div>
                    { content === "whoAmI" && <CardIntroduction /> }
                </div>
            </div>

        );
    }
}

export default Card;


