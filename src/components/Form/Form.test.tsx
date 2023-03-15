import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('Renders the form', () => {
    render(<Form />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
