import React from 'react';
import { action } from '@storybook/addon-actions';
import Tweet from '../Tweet';


const tweet =   {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

export default {
  title: "Tweet",
  decorators: [storyFn => <div style={{ backgroundColor: 'white' }}>{storyFn()}</div>]
}

export const tweetWithProps = () => <Tweet {...tweet} /> 