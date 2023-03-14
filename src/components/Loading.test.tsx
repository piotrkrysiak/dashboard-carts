import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {
  it('Renders Loading component text', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...'));
  });
});
