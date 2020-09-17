import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Project from './Project';
import video from './../../image/simplicruit.mov';
import snapshot from './../../image/simplicruit.png';

class CardProjectList extends Component {
    render () {

        return (

            <div className="project-list">
                <Project 
                    projectName="Simplicruit" 
                    projectSkill={["RAILS", "JS", "WATSON", "HTML", "CSS", "GIT"]}
                    projectRole="Full Stack Developer"
                    projectDescription="This is simplicruit"
                    projectGif="https://media.giphy.com/media/W2j6OXFeevVorGCSwd/giphy.gif"
                    projectVideo={ video }
                    projectSnapshot={ snapshot }
                />
                <Project 
                    projectName="Cookpal" 
                    projectSkill={["Ruby on rails", "JS", "HTML", "CSS", "Git"]} 
                    projectRole="Front End Developer"
                    projectDescription="THis is Cookpal"
                    projectGif="https://media.giphy.com/media/W2j6OXFeevVorGCSwd/giphy.gif"
                    projectVideo={ video }
                    projectSnapshot={ snapshot }
                />
            </div>

        );
    }
}

export default CardProjectList;
