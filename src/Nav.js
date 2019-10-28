import React from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ writeTweet }) => {
  return (
    <nav>
      <div className="nav-content">
        <span>tweeter</span>
        <div className="write-tweet" onClick={writeTweet}>
          <p><span>Write</span> a new tweet</p>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
