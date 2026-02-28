import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => (
        <a href={`#${link}`} key={index} style={{ marginRight: "10px" }}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;