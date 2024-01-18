import React from "react";
import "../styles/Home.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

function Home() {
  return (
    <div className="home">
      <section class="home" id="home">
      <div class="home-content">
        <div class="text">
          <div class="text-one">Hello,</div>
          <div class="text-two">I'm Gunel</div>
          <div class="text-three">Web Developer</div>
          
          <a href="https://www.linkedin.com/in/gunel-azizova-604729259/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/LittleSmile05" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
            <a href="mailto:gunelazizova2005@gmail.com">
              <EmailIcon />
            </a>
        </div>
      </div>
    </section>
      <section class="skills" id="skills">
      <div class="content">
        <div class="title"><span>My Skills</span></div>
        <div class="skills-details">
          <p>HTML</p>
          <div class="container">
            <div class="skills html">90%</div>
          </div>

          <p>CSS</p>
          <div class="container">
            <div class="skills css">80%</div>
          </div>

          <p>JavaScript</p>
          <div class="container">
            <div class="skills js">85%</div>
          </div>
          
          <p>Jquery</p>
          <div class="container">
            <div class="skills jquery">80%</div>
          </div>

          <p>Node.js/Express.js</p>
          <div class="container">
            <div class="skills node">80%</div>
          </div>

          <p>Mongodb</p>
          <div class="container">
            <div class="skills mongo">70%</div>
          </div>

          <p>PostgreSQL</p>
          <div class="container">
            <div class="skills postgre">80%</div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
