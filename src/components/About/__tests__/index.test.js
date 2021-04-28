import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);


describe('About component', () => {
    //The first test will be the baseline to verify that the component is rendering.
    it('renders', () => {
        render(<About />);
    });

    //Second test
})