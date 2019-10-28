import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from '../Header';


export default {
  title: 'Header'
}

export const defaultHeader = () => <Header />

export const headerWithProfile = () => <Header name='Bobby' profileImg='/images/profile-hex.png' />