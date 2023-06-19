import * as React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export const Home = () => {
  return (
    <>
      <link rel="stylesheet" href="./static/css/Home.css"></link>
      <div className="homepage-section">
        {/* introduction with things floating around */}
        <div className="name-section">
          <h1 className="center-text">
            Hey! I'm{"\u00A0"}
          </h1>
          <hi className="center-text jojo">
          </hi>
          <hr/>
          <h1 className="interests" style={{fontSize: 45 + "px"}}>
            <b>I enjoy web development, competitive programming, math and music.</b>
          </h1>
        </div>
        <hr></hr>
        <div className="section-1">
          <div className="text-section">
            <h2 className="center-text">
              About Me
            </h2>
            <p>
              My name is Joshua Wang, and I am currently a Grade 10 student in the Math, Computer Science and Science (MaCS) program at William Lyon Mackenzie Collegiate Institute in Toronto, Ontario. 
              At school, I am a clarinetist in the concert band, a lesson executive in Math Club, I work on the frontend (and the games!) for my school's website, Project Metropolis, and I am an active member in our school's computer programming team, MCPT. 
              <br/><br/>
              Besides STEM, I have been a member of my school's DECA team for two years (Entrepreneurship in Gr. 9 and Marketing in Gr. 10), and I also sometimes dabble in business, finance, and stock market competitions.  
              While I plan on exploring as many things as I can in high school and keeping my options open, I aim to study Computer Science / AI in the future at UWaterloo or CMU.
              <br/><br/>
              I enjoy meeting people, socializing, and making new friends, so always feel free to reach out to me!
            </p>
          </div>
          <div className="img-section">
            {/* TODO: Replace image with React carousel */}
            <img src="./static/img/selfie_with_oswald.jpeg" height="300px" width="225px"></img>
          </div>
        </div>
        <div className="section-2">
          <div className="img-section">
            {/* TODO: Replace image with React carousel */}
            <img src="./static/img/piano_suit_josh.jpg" height="300px" width="225px"></img>
          </div>
          <div className="text-section">
            <h2 className="center-text">
              Hobbies and Interests
            </h2>
            <p>
              In my free time, I like to play piano, listen to music, and compose. 
              Although I haven't produced any finished songs yet, I hope to have a few songs made before the end of high school.
              I also enjoy learning about math and competitive programming algorithms (especially the satisfying ones).
              Often, I spend several hours in a day thinking about problems, so if you ever catch me blankly staring at a wall, that's probably what I'm doing.
            </p>
            <p>
              To avoid starving to death in university, cooking is also one of my hobbies.
              I enjoy making simple and comfortable dishes, especially spicy and flavorful foods.
              I would say that I'm a rather decent chef, even though my family might disagree.
            </p>
            <p>
              Finally, I am also learning Japanese on Duolingo (280 day streak as of 04/29/23). 
              My background in Chinese is definitely helpful for reading and writing characters, although my level in Chinese is on par with the average 6-year old's.
              Once my Japanese is fluent enough, I hope to travel to Japan some day to experience the culture <strike>and the anime</strike>.
            </p>
          </div>
        </div>
        <div className="section-3">
          <div className="text-section">
            <h2 className="center-text">
              Things I Like (in no particular order)
            </h2>
            <ul>
              <li>My Oswald stuffy (to the right)</li>
              <li>Fun competitive programming problems</li>
              <li>Cheap supermarket sushi</li>
              <li>Sparkling water</li>
              <li>Deathly spicy instant noodles</li>
              <li>Jazzy songs</li>
              <li>Making games</li>
              <li>Playing chess (especially doing chess puzzles)</li>
              <li>Sleeping in on weekends</li>
              <li>Long and peaceful bike rides</li>
            </ul>
          </div>
          <div className="img-section">
            <img style={{"height" : 300 + "px", "width" : 300 + "px"}} src="./static/img/Cool Oswald Picture.jpg"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;