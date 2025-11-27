import React, { useState } from "react";
import ServiceCSS from "./../Services/Service.module.css";

function Service() {
  const [expanded, setExpanded] = useState([false, false, false]);

  const toggleReadMore = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const services = [
    {
      title: "Web Design",
      shortText: "Creating visually stunning and user-friendly designs...",
      fullText:
        " I specialize in responsive layouts, modern aesthetics, and intuitive navigation. Whether it's a landing page, business website, or an e-commerce store, I ensure an engaging and seamless experience that aligns with your brand identity.",
    },
    {
      title: "Web Development",
      shortText: "Building fast and scalable web applications...",
      fullText:
        " Utilizing the latest technologies like React, Node.js, and MongoDB to create seamless digital experiences. From front-end design to back-end functionality, I ensure high performance, security, and responsiveness across all devices.",
    },
    {
      title: "UI/UX Designer",
      shortText: "Enhancing user interactions through great design...",
      fullText:
        " Focusing on usability, accessibility, and innovative UI solutions that boost engagement. I conduct user research, create wireframes, and prototype interfaces to enhance the user experience, ensuring intuitive navigation and a visually appealing design.",
    },
  ];

  return (
    <section id="services">
      <div className={ServiceCSS.service}>
        <h2>Service</h2>
        <p>
          Elevate your business with modern, high-quality digital solutions
          tailored to your needs.
        </p>

        <div className={ServiceCSS.service_cards}>
          {services.map((service, index) => (
            <div key={index} className={ServiceCSS.service_card}>
              <h3>{service.title}</h3>
              <p>
                {service.shortText} {expanded[index] && service.fullText}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className={ServiceCSS.readMoreBtn}
              >
                {expanded[index] ? "Read Less..." : "Read More..."}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
