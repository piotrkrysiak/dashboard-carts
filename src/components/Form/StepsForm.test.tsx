import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StepsForm from './StepsForm';

describe('Form', () => {
  it('Renders the form', () => {
    render(
      <BrowserRouter>
        <StepsForm handelClose={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByText('Total:')).toBeInTheDocument();
  });
});
