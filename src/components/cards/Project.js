import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../style/Project.css';

class Project extends Component {
    render () {

        const { projectName, projectskill, projectRole, projectDescription, projectGif } = this.props;

        return (

            <div className="project">
                <div>{ projectskill }</div>
                <div>{ projectRole }</div>
                <div>{ projectDescription }</div>
                <div className="gif-wrapper">
                    <div className="project-name">{ projectName }</div>
                    <img src={ projectGif } className="project-gif"></img>
                </div>
            </div>

        );
    }
}

export default Project;
