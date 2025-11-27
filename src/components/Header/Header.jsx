import React from "react";
import HeaderCSS from "./Header.module.css";
import Hero from "../../../public/hero1.jpg";
import ActionButton from "../Utilis/ActionButton";
import { motion } from "framer-motion";

function Header() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, type: "spring", bounce: 0.3 },
    },
  };

  const iconVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.4, type: "spring" },
    }),
  };

  const btnVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20, delay: 1.2 },
    },
  };

  return (
    <>
      <section id="home">
        {/* <div className={HeaderCSS.circle1}></div>
        <div className={HeaderCSS.circle2}></div> */}

        <div className={HeaderCSS.hero}>
          {/* Left Side: Text */}
          <motion.div
            className={HeaderCSS.hero_info}
            initial="hidden"
            animate="visible"
          >
            <h1>
              {["Hi,", " I", " Am", " Yash Deep Singh"].map((word, i) => (
                <motion.span key={i} custom={i} variants={textVariant}>
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={textVariant}
              custom={5}
              className="fade-text"
            >
              "I am a passionate web developer skilled in building dynamic,
              responsive, and user-friendly applications. With expertise in
              React, JavaScript, and modern UI/UX, I create seamless
              experiences."
            </motion.p>

            <motion.div
              className={HeaderCSS.social_icons}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  href: "https://www.instagram.com/yash_rana2917?igsh=cWptZ3dybDQ1N3Ru",
                  icon: "fa-instagram",
                },
                {
                  href: "https://www.linkedin.com/in/yash-deep-singh-17b012303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  icon: "fa-linkedin",
                },
                {
                  href: "https://www.facebook.com/profile.php?id=100048388841485",
                  icon: "fa-facebook",
                },
                {
                  href: "https://github.com/yash6rana6",
                  icon: "fa-github",
                },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariant}
                  custom={i}
                >
                  <i className={`fa-brands ${link.icon}`}></i>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className={HeaderCSS.hero_btns}
              initial="hidden"
              animate="visible"
              variants={btnVariant}
            >
              <ActionButton type="hire" />
              <ActionButton type="contact" />
            </motion.div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className={HeaderCSS.hero_img}
            initial="hidden"
            animate="visible"
            variants={imageVariant}
          >
            <img src={Hero} alt="Yash Deep Singh" />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Header;
