import React from 'react';

import { render, fireEvent } from 'react-testing-library'; 
import 'jest-dom/extend-expect'; 

import App from './App';
import Display from './display/Display';
import Dashboard from './dashboard/Dashboard';

describe('<App />', () => {

  it('renders without crashing', () => {
    render(<App />);
  });

  it('outcome(hit) resets balls and strikes', () => {
    const { getByText} = render(<Dashboard />);
    const hit = getByText(/hit/i);
    fireEvent.click(hit);

    const { getByTestId } = render(<Display />);
    const balls = getByTestId('balls');
    const strikes = getByTestId('strikes');
    expect(balls.textContent).toBe('0');
    expect(strikes.textContent).toBe('0');

  });

})