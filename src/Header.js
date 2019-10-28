import React from 'react';
import './Header.scss';

const Header = ({name, profileImg}) => {
  return (
    <header className="header-main">
      <div>
        <img src={profileImg} />
      </div>
      <br />
      <div>
        <h2>{name}</h2>
      </div>
    </header>
  );
}

export default Header;
