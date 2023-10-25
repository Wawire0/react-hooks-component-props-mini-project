import React from 'react';

const About = ({ image, text }) => {
  return (
    <aside>
      <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{text}</p>
    </aside>
  );
};

export default About;
