import * as React from 'react';
import { BsSunFill, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';

export const Projects = () => {
  return (
    <>
      <div id="content">
        <link rel="stylesheet" href="./static/css/Projects.css"></link>

        <div className="project">
          <h1>Spodissey</h1>

          <div className="project-info">
            <a href="https://devpost.com/software/spodissey" target="_blank">
              <img src="./static/img/spodissey.png"></img>
            </a>
            <h2>Collaborators:</h2>
            <p>
              Joshua Wang, Nirvan Rabbani, Aidan Wang, Patrick Bian
            </p>

            <h2>About:</h2>
            <p>
              Runner-up project for 2023 LyonHacks Hackathon. 
              <br/><br/>
              Spicing up your life with music around the world! 
              This software accesses your Spotify account and recommends songs from countries around the world.
            </p>

            <h2>Link:</h2>
            <p>
              <a href="https://devpost.com/software/spodissey" target="_blank">Devpost - Spodissey</a>
            </p>
          </div>
        </div>
        
        <div className="project">
          <h1>Project Metropolis</h1>

          <div className="project-info">
              <a href="https://github.com/wlmac" target="_blank">
                <img src="./static/img/metropolis.png"></img>
              </a>
              <h2>Collaborators:</h2>
              <p>
                The Project Metropolis Team
              </p>

              <h2>About:</h2>
              <p>
                School information website for William Lyon Mackenzie CI.

                <br/><br/>
                Features latest announcements about clubs, events, personalized student timetables, calendars and a map for WLMCI.
              </p>

              <h2>Link:</h2>
              <p>
                <a href="https://maclyonsden.com/" target="_blank">Project Metropolis - MacLyonsDen</a>
              </p>
            </div>
          </div>
  
          <div className="project">
              <h1>Fatal Friendships</h1>

              <div className="project-info">
                <a href="https://github.com/JojoTheWarrior/Fatal-Friendships" target="_blank">
                  <img src="./static/img/fatal_friendships.png"></img>
                </a>
                <h2>Collaborators:</h2>
                <p>
                Joshua Wang, Alyn Huang
                </p>

                <h2>About:</h2>
                <p>
                Fatal Friendships is a video game that targets youth between the ages of 10 to 12. 
                
                It tells the story of James and Max, two friends who have a toxic friendship, with Max being the main antagonist. 
                
                In the game, the player learns how to identify the characteristics of a toxic friend, how to be a healthier friend, and how to end a toxic friendship.
                
                The first two levels contain relaxing gameplay focused on learning, while the third level climaxes with an action-packed boss fight in which the player must apply his previously learned knowledge.
                
                <br/><br/>
                
                My contribution was the first and third of the three levels (my partner did level 2). 
              
                I was also responsible for managing the game structure and file structure.
              
                This project taught me a lot about how to apply Object-Oriented Programming to a real project.

                For example, I created classes to generalize multiple choice questions and character dialogue, I used polymorphism to display screens in general (regardless of what type of screen it is), and I used inheritance to create specialized subclasses.
            
                Screenshots of the game and a game demo can be found in the ReadMe section of Fatal Friendship's GitHub.
                </p>
              <h2>Link:</h2>
              <p>
                <a href="https://www.youtube.com/watch?v=wDgQdr8ZkTw" target="_blank">Fatal Friendships</a>
              </p>
            </div>
          </div>
        </div>
    </>
  );
}

export default Projects;
