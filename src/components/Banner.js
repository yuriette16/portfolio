import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/Banner.css';

class Banner extends Component {
    render () {
        return (
            <div className="banner-wrapper">
                <div id="myname">YURIE SHIOTANI</div>
                <div id="job-title">Front-End Engineer | Cloud Application Engineer | Cooking Lover</div>
                <ul>
                    <li><a className="underlined" href="">About</a></li>
                    <li><a className="underlined" href="">Work</a></li>
                    <li><a className="underlined" href="">Cook</a></li>
                </ul>
            </div>
        );
    }
}

export default Banner;