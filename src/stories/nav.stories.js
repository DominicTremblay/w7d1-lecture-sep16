import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Nav from '../Nav';

// storiesOf('Nav', module)
//   .add('Default Nav', () => <Nav />)
//   .add('Nav with write tweet', () => <Nav writeTweet={action('Write Tweet')} />)

export default {
  title: 'Nav'
}

export const defaultNav = () => <Nav />

export const navWithWrite = () => <Nav writeTweet={action('Write Tweet')} />

navWithWrite.story = {
  name: 'Nav with Write Tweet'
}