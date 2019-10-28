import React from 'react';
import { action } from '@storybook/addon-actions';
import NewTweet from '../NewTweet';

export default {
  title: 'NewTweet',
  decorators: [storyFn => <div style={{ backgroundColor: 'white' }}>{storyFn()}</div>]
}

export const defaultNewTweet = () => <NewTweet />
export const NewTweetWithSubmit = () => <NewTweet submitTweet={action('Tweet submitted')} />