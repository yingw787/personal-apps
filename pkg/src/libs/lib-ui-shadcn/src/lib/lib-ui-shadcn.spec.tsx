import { render } from '@testing-library/react';

import LibUiShadcn from './lib-ui-shadcn';

describe('LibUiShadcn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibUiShadcn />);
    expect(baseElement).toBeTruthy();
  });
});
