import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import CardIntroduction from './cards/CardIntroduction'
import CardProjectList from './cards/CardProjectList'

class Card extends Component {
    render () {
        const { content } = this.props;

        const getTitle = () => {
            if (content === "whoAmI") {
                return "WHO I AM";
            } else if (content === "myproject") {
                return "What I create";
            }
        };

        return (

            <div className="card-wrapper">
                <div className="card-title">
                    <div className="card-title-header">{ getTitle() }</div>
                    { content === "whoAmI" && <CardIntroduction /> }
                    { content === "myproject" && <CardProjectList />}
                </div>
            </div>

        );
    }
}

export default Card;


