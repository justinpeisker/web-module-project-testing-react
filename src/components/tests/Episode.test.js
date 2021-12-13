import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id: 1,
    name: '',
    summary: 'test summary'
}

const testEpisodeWithoutImage = {
    id: 1,
    name: '',
    summary: 'test summary',
    image: null
}

test("renders without error", () => {
    render(<Episode  episode= {testEpisode} />)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode= {testEpisode} />)

    const summary = screen.queryByText(/test summary/i)

    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent('test summary');
    expect(summary).toBeTruthy();


     
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode= {testEpisodeWithoutImage}/>)

    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')

    expect(image).toBeInTheDocument();
    expect(image).toBeFalsy;
});
