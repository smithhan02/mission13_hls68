import React from 'react';
import styles from './Blah.module.css';
function TopBanner() {
  return (
    <div className="row">
      <div>
        <img src="JoelHiltonHeadshot.png"></img>
      </div>
      <div className="col align-self-center text-start">
        <h1> This Site Provides Some Great Movie Info </h1>
      </div>
    </div>
  );
}

export default TopBanner;
