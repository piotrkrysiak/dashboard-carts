import { render, screen } from '@testing-library/react';
import StepsForm from './StepsForm';

describe('Form', () => {
  it('Renders the form', () => {
    render(<StepsForm handelClose={() => {}} />);
    expect(screen.getByText('Total:')).toBeInTheDocument();
  });
});
