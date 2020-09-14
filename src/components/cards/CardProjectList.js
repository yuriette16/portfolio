import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Project from './Project';

class CardProjectList extends Component {
    render () {

        return (

            <div className="project-list">
                <Project 
                    projectName="Simplicruit" 
                    projectSkill={["Ruby on rails", "JS", "Watson", "HTML", "CSS", "Git"]}
                    projectRole="Full Stack Developer"
                    projectDescription="This is simplicruit"
                    projectGif="https://media.giphy.com/media/W2j6OXFeevVorGCSwd/giphy.gif"
                />
                <Project 
                    projectName="Cookpal" 
                    projectSkill={["Ruby on rails", "JS", "HTML", "CSS", "Git"]} 
                    projectRole="Front End Developer"
                    projectDescription="THis is Cookpal"
                    projectGif="https://media.giphy.com/media/W2j6OXFeevVorGCSwd/giphy.gif"
                />
            </div>

        );
    }
}

export default CardProjectList;
