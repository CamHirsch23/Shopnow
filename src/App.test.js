// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Shop Now button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Shop Now/i);
  expect(buttonElement).toBeInTheDocument();
});