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

//Create a test for emoji visibility 
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />);

        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');  
    });
}) 

//Create a test for link visibility
// describe('links are visible', () => {
//     it('inserts text into the links', () => {
//       const { getByTestId } = render(<Nav />);

//       expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
//       expect(getByTestId('about')).toHaveTextContent('About me');
//     });
// })