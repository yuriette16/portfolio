import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

import '../../style/Project.css';
import * as Constants from './../../Constants.js'


const styles = (theme) => ({
    paper: {
      position: 'absolute',
      width: '64%',
      backgroundColor: theme.palette.background.paper,
      outline: 'none',
      border: '4px solid rgb(195,155,162)',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
  });

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        // this.closeProjectModal = this.closeProjectModal.bind(this);
        // this.displayProjectModal = this.displayProjectModal.bind(this);       
    }

    render () {

        const { projectName, projectSkill, projectRole, projectDescription, projectGif, projectVideo, projectSnapshot, classes } = this.props;
        const icons = Constants.Icons;

        const closeProjectModal = () => {
            this.setState({
                open: false
             });
        };
        
        const displayProjectModal = () =>  {
            this.setState({
               open: true  
            });
       };

    //    const displayIcons = () => {
    //         projectSkill.map((skill) => {
    //             return icons[`${skill}`];
    //         });
    //    };

        return (
            <div>
                <div className="project" onClick={ displayProjectModal } >
                    <div className="gif-wrapper">
                        <div className="project-name">{ projectName }</div>
                        <img src={ projectGif } className="project-gif"></img>
                    </div>
                    
                </div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={ this.state.open }
                    onClose ={ closeProjectModal }
                    style={ {display:'flex', alignItems:'center', justifyContent:'center'} }
                >
                    <div className={classes.paper}> 
                        <h2 id="transition-modal-title">{ projectName }</h2>
                        <div className="projectcard-flex">
                            <div className="project-detail">
                                <div>{ projectRole }</div>
                                <div>{ projectDescription }</div>
                                <div className="project-icons">
                                    { projectSkill.map((skill) => {
                                        return icons[`${ skill }`];
                                    }) }
                                </div>
                            </div>
                            <div className="project-video">
                                <video controls className="video" Autoplay="autoplay" >
                                    <source src={ projectVideo } type="video/mp4"/>
                                </video>
                            </div> 
                        </div>    
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withStyles(styles)(Project) ;
