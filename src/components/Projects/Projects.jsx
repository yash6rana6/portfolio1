import React from "react";
import ProjectCSS from "./../Projects/Projects.module.css";
import Img1 from "./../../assets/images/ecommerce.png";
import Img2 from "./../../assets/images/7.png";
import Img3 from "./../../assets/images/Spotify.png";
import Img4 from "./../../assets/images/MentorHub.png"


function Projects() {
  return (
    <section id="projects">
      <div className={ProjectCSS.projects}>
        <h2>Projects</h2>
        <p>
          "Here are some of my latest projects showcasing my skills in web
          development and UI/UX design."
        </p>
        <div className={ProjectCSS.projects_cards}>
          <div className={ProjectCSS.projects_card}>
            <img src={Img1} alt="E-Commerce" />
            <div>
              <h4>Full Stack E-commerce</h4>
              <p>
                Designed and developed a feature-rich e-commerce platform for
                seamless online shopping. Integrated product listing, cart
                functionality, and order management. Built using React, Redux,
                Node.js, and MongoDB.
              </p>
              <a href="" target="_blank">
                Read more...
              </a>
            </div>
          </div>
          <div className={ProjectCSS.projects_card}>
            <img src={Img2} alt="Study-Notion" />
            <div>
              <h4>Study Notion</h4>
              <p>
                A feature-rich platform for seamless online learning, offering
                course creation, student engagement, and secure payments.
              </p>
              <a
                href="https://github.com/yash6rana6/Study_Notion.git"
                target="_blank"
              >
                Read more...
              </a>
            </div>
          </div>

          <div className={ProjectCSS.projects_card}>
            <img src={Img3} alt="Project-Img-3" />
            <div>
              <h4> Realtime Spotify </h4>
              <p>
                Developed a full-stack music streaming platform inspired by
                Spotify. Implemented user authentication with Clerk, integrated
                Google login, and enabled song uploads with secure storage.
                Built with React, TypeScript, Node.js, and MongoDB.
              </p>
              <a href="https://github.com/yash6rana6/Realtime_spotify_clone.git" target="_blank" >Read more...</a>
            </div>
          </div>
          <div className={ProjectCSS.projects_card}>
            <img src={Img4} alt="Project-Img-4" />
            <div>
              <h4>Mentor Hub</h4>
              <p>
             MentorHub is an AI-driven platform that helps users practice mock interviews in real-time
              </p>
              <a href="https://github.com/yash6rana6/Spotify.git" target="_blank">Read more...</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
