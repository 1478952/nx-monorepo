import { render } from '@testing-library/react';

import Testui from './testui';

describe('Testui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Testui />);
    expect(baseElement).toBeTruthy();
  });
});
