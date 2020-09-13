import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import '../../style/Project.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render () {

        const { projectName, projectSkill, projectRole, projectDescription, projectGif } = this.props;

        const displayProjectModal = () => {
             this.setState({
                open: true  
             });
        };

        const closeProjectModal = () => {
            this.setState({
                open: false 
             });
        };

        return (

            <div className="project" onClick={displayProjectModal} >
                <div>{ projectSkill }</div>
                <div>{ projectRole }</div>
                <div>{ projectDescription }</div>
                <div className="gif-wrapper">
                    <div className="project-name">{ projectName }</div>
                    <img src={ projectGif } className="project-gif"></img>
                </div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
          
                    open={ this.state.open }
                    onClose={ closeProjectModal }

                >

                            <h2 id="transition-modal-title">{ projectName }</h2>
                </Modal>
            </div>

        );
    }
}

export default Project;
