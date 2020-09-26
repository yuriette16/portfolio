import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/Banner.css';

class Banner extends Component {
    render () {

        const { scrollToMyRef } = this.props;

        return (
            <div className="banner-wrapper">
                <div id="myname">YURIE SHIOTANI</div>
                <div id="job-title">Front-End Engineer | Cloud Application Engineer | Cooking Lover</div>
                <ul className="list-links">
                    <li><button className="link-button" onClick={ () => scrollToMyRef("about") }>About</button></li>
                    <li><button className="link-button" onClick={ () => scrollToMyRef("skill") }>Skill</button></li>
                    <li><button className="link-button" onClick={ () => scrollToMyRef("project") }>Project</button ></li>
                    <li><button className="link-button" onClick={ () => scrollToMyRef("cook") }>Cook</button></li>
                    <li><button className="link-button" onClick={ () => scrollToMyRef("contact") }>Contact</button></li>
                </ul>
            </div>
        );
    }
}

export default Banner;