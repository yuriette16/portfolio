import React, { Component } from 'react';

import '../style/Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
        <div className="profile-icons">
            <a href="https://www.linkedin.com/in/yurie-shiotani-81a45896/"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/yuriette16"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/yuriesrecipes/"><i className="fab fa-instagram"></i></a>
        </div>
        );
    }
}

export default Sidebar;