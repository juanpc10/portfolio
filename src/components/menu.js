import React from 'react';

import './menu.scss';

import { Link } from "@reach/router";




function Menu() {
  return (
    <div className="navigationMenu">
      <Link to="/"><h4>Home</h4></Link>
      <Link to="/about"><h4>About</h4></Link>
      <Link to="/experience"><h4>Experience</h4></Link>
      <Link to="/contact"><h4>Contact</h4></Link>
    </div>
  );
}

export default Menu;


