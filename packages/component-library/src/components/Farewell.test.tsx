import { test, expect } from '@jest/globals';
import {
    render,
} from '@testing-library/react';

import Farewell from './Farewell';


test('should render the provided name', () => {
    const { container } = render(<Farewell name="World" />);

    expect(container).toHaveTextContent('Goodbye, World');
});