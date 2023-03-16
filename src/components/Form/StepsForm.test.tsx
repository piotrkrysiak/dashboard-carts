import { render, screen } from '@testing-library/react';
import Form from './StepsForm';

describe('Form', () => {
  it('Renders the form', () => {
    render(<Form />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
