import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

const WrappedNavbar = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

describe('Navbar', () => {
  it('Renders Navbar component', () => {
    render(<WrappedNavbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('Have logo', () => {
    render(<WrappedNavbar />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/carts');
  });

  it('Have button to add item', () => {
    render(<WrappedNavbar />);
    expect(
      screen.getByRole('button', { name: 'Add item' })
    ).toBeInTheDocument();
  });
});
