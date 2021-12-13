import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockFetchShow from '../../api/fetchShow';
import Display from './../Display';

jest.mock('../../api/fetchShow')
const testShow = {
    name: 'test name',
    summary: 'test summary',
    seasons: [
        {
            id: 0,
            seasonName: 'season 1',
            episodes: []

        },
        {
            id: 1,
            seasonName: 'season 2',
            episodes: []

        }
    ]
}

test('renders without errors with no props', ()=>{
    render(<Display />)
});

test('renders Show component when the button is clicked ',async ()=>{
    mockFetchShow.mockResolvedValueOnce(testShow)
    render(<Display />)
    const button = screen.getByRole("button");
    userEvent.click(button);

    const show = await screen.findByTestId('show-container');
    expect(show).toBeInTheDocument();
     
});

test('renders show season options matching your data when the button is clicked', async ()=>{
    mockFetchShow.mockResolvedValueOnce(testShow)
    render(<Display />)
    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() =>{
       const seasonOptions = screen.queryAllByTestId('season-option')
       expect(seasonOptions).toHaveLength(2)
    })
});

test('renders show season options matching your data when the button is clicked', ()=>{});
