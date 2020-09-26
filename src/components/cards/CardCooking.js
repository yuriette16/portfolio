import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../../style/Cooking.css';

import nasu from '../../image/nasu.jpg';
import tataki from '../../image/tataki.jpg';
import yellowtail from '../../image/yellowtail.jpg';

class CardCooking extends Component {
    render() {
        return (
            <div className="cooking-wrapper">
                <div className="cooking">
                    <div className="cooking-individual">
                        <img src={nasu} className="cooking-img" alt="Steamed eggplant with grated raw radish" />
                        <div className="cooking-description">Steamed eggplant with grated raw radish</div>
                    </div>  
                    <div className="cooking-individual"> 
                        <div className="cooking-description">Ume based fish tartar</div>
                        <img src={tataki} className="cooking-img" alt="Ume based fish tartar" />
                    </div> 
                    <div className="cooking-individual">
                        <img src={yellowtail} className="cooking-img" alt="Yellowtail steak" />
                        <div className="cooking-description">Yellowtail steak</div>
                    </div>       
                </div>    
            </div>
        );
    }
};

export default CardCooking;