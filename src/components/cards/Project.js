import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

import '../../style/Project.css';

const styles = (theme) => ({
    paper: {
      position: 'absolute',
      width: 800,
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

        const { projectName, projectSkill, projectRole, projectDescription, projectGif, classes } = this.props;

        const closeProjectModal = () => {
            console.log("aaaaaa");
            this.setState({
                open: false
             });
        };
        
        const displayProjectModal = () =>  {
            console.log("bbbb");
            this.setState({
               open: true  
            });
       };

        return (
            <div>
                <div className="project" onClick={ displayProjectModal } >
                    <div>{ projectSkill }</div>
                    <div>{ projectRole }</div>
                    <div>{ projectDescription }</div>
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
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withStyles(styles)(Project) ;
