import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('updates a person name when typing in the input', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  const input = div.querySelector('input[type="text"]');
  Simulate.change(input, { target: { value: 'Alexis' } });

  expect(input.value).toBe('Alexis');
  expect(div.querySelector('.Person b').textContent).toBe('Alexis.');

  ReactDOM.unmountComponentAtNode(div);
});
