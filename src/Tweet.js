import React from 'react';
import './Tweet.scss';

const Tweet = ({user: {name, avatars, handle}, content: {text}, created_at}) => {


  return (
<article>
          <header>
            <div className="avatar">
              <img
                src={avatars}
                alt="avatar"
                className="user-avater"
              />
              <h2 className="user-avater">{name}</h2>
            </div>
            <small className="user-handle">{handle}</small>
          </header>
          <div className="body">
            <p>
              {text}
            </p>
          </div>
          <footer>
        <small className="age">{created_at}</small>
            <span className="actions">
              <a href="#"><i className="fa fa-flag"></i></a>
              <a href="#"><i className="fa fa-retweet"></i></a>
              <a href="#"><i className="fa fa-heart"></i></a>
            </span>
          </footer>
        </article>
  );
}

export default Tweet;
