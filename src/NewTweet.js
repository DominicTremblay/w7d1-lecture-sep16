import React from 'react';
import './NewTweet.scss';

const NewTweet = ({submitTweet}) => {

  const handleSubmit = event => {
    event.preventDefault();
    submitTweet('Tweet submitted');
  }


  return (
     <section class="new-tweet">
        <header>
          <div id="error-container">
            <h4></h4>
          </div>
        </header>

      <form onSubmit={handleSubmit}>
          <textarea
            name="text"
            placeholder="What are you humming about?"
          ></textarea>
          <footer>
            <input class="btn-new-tweet" type="submit" value="Tweet" />
            <span class="counter">140</span>
          </footer>
        </form>
      </section>
  );
}

export default NewTweet;
