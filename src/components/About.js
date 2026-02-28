/ src/components/About.js
import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <Links links={links} />
    </div>
  );
}

export default About;


