import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

/* ********************* Smoke Tests ********************* */

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  });
});
