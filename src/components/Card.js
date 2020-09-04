import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
            
            <div className=""> 
                <div class="card-title">{getTitle()}</div>
            </div>

        );
    }
}

export default Card;


