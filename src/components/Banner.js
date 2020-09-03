import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Banner extends Component {
    render () {
        return (
            <div className="banner-wrapper">
                <div id="myname">YURIE SHIOTANI</div>
                <div id="job-title">Front-End Engineer | Cloud Application Engineer | Cooking Lover</div>
                <div>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-instagram"></i>
                </div>
                <button className="btn-radius">See my work</button>
            </div>
        );
    }
}

export default Banner;