import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class CardIntroduction extends Component {
    render() {
        return (
            <div className="profile-wrapper">
                <div className="profile-img"><img src={require("../../image/portfolio_img.jpg")} alt="Profile picture" width="500" height="600" /></div>
                <div className="mydescription">
                    <p>I'm Yurie, cloud application engineer with +3 years of experiences.<br/>
                    I transform creative ideas into responsive web applications.<br/>
                    Since 2017, I've worked on both a large project and PoC project in agile to promote digital innovation with IBM Watson.<br/>
                    Currently, I'm based in Tokyo, Japan, and I've been working on several projects such as web application, and mobile app.<br/></p>
                    <p>Outside of improving my development skills, I enjoy introducing Japanese cuisine, traveling, and learning foreign languages.</p> 
                </div>
            </div>
        )
    }
}

export default CardIntroduction;