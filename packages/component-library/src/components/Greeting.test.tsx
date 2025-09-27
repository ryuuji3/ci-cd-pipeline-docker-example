import { test, expect } from '@jest/globals';
import {
    render,
} from '@testing-library/react';

import Greeting from './Greeting';


test('should render the provided name', () => {
    const { container } = render(<Greeting name="World" />);

    expect(container).toHaveTextContent('Hello, World');
});