import { render, fireEvent } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import Popup from './Popup';

describe('Popup', () => {
  it('Renders title and children', () => {
    const title = 'Test Popup';
    const content = 'Test Content';
    const { getByText } = render(
      <Popup isOpen={true} handleClose={() => {}} title={title}>
        {content}
      </Popup>
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
  });

  it('Calls handleClose when close button is clicked', () => {
    const handleClose = vi.fn();
    const { getByRole } = render(
      <Popup isOpen={true} handleClose={handleClose} title="Test Popup">
        Test Content
      </Popup>
    );
    fireEvent.click(getByRole('button'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Does not render when isOpen is false', () => {
    const { queryByText } = render(
      <Popup isOpen={false} handleClose={() => {}} title="Test Popup">
        Test Content
      </Popup>
    );
    expect(queryByText('Test Popup')).not.toBeInTheDocument();
    expect(queryByText('Test Content')).not.toBeInTheDocument();
  });
});
