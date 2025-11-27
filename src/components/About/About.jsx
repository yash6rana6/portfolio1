import React from 'react'
import AboutCSS from './../About/About.module.css';
import About_img from './../../../src/assets/images/about.jpg';
import DownloadCVButton from '../Utilis/DownloadCV';

function About() {
    return (
        <section id='about'>
            <div className={AboutCSS.about}>
                <div className={AboutCSS.about_img}>
                    <img src={About_img} alt="" />
                </div>
                <div className={AboutCSS.about_info}>
                    <p>About me</p>
                    <h2>Yash Deep Singh</h2>
                    <h3>Hello! I am <span>MERN Stack</span>Developer.</h3>
                    <p>"I specialize in building full-stack applications with React, Node.js, and MongoDB. Passionate about creating efficient, scalable, and visually appealing web solutions. Let's build something amazing together!"</p>
                    
                      <DownloadCVButton/>
                   
                </div>
            </div>
        </section>
    )
}

export default About