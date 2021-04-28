// __tests__/Nav.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    //Baseline test
    it('renders', () => {
        render(<Nav />);
    });

    //Snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        
        expect(asFragment()).toMatchSnapshot();
    });
});