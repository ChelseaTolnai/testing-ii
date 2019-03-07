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
    fireEvent.click(getByText(/hit/i));

    const { getByTestId } = render(<Display />);
    expect(getByTestId('balls').textContent).toBe('0');
    expect(getByTestId('strikes').textContent).toBe('0');
  });

  it('outcome(foul) adds count to strikes up to 2, () => {
    const { getByText} = render(<Dashboard />);
    const { getByTestId } = render(<Display />);
    fireEvent.click(getByText(/foul/i));
    expect(getByTestId('strikes').textContent).toBe('1');
    fireEvent.click(getByText(/foul/i));
    expect(getByTestId('strikes').textContent).toBe('2');
    fireEvent.click(getByText(/foul/i));
    expect(getByTestId('strikes').textContent).toBe('2');
  });

  it('outcome(strike) counts to strike and resets at 3', () => {
    const { getByText} = render(<Dashboard />);
    const { getByTestId } = render(<Display />);
    fireEvent.click(getByText(/strike/i));
    expect(getByTestId('strikes').textContent).toBe('1');
    fireEvent.click(getByText(/strike/i));
    expect(getByTestId('strikes').textContent).toBe('2');
    fireEvent.click(getByText(/strike/i));
    expect(getByTestId('strikes').textContent).toBe('0');
  });

})