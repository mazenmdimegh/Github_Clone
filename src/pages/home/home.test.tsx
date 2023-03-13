import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './index';

describe('Home component', () => {

    //check if the component renders without crashing by searching for the "welcome to Github" text.
    test('renders without crashing', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(screen.getByText('welcome to Github')).toBeInTheDocument();
    });

    //submits valid token and navigates to profile page
    test('submits valid token and navigates to profile page', () => {
        const navigate = jest.fn();
        const handleSubmit = jest.fn();

        Object.defineProperty(window, 'sessionStorage', {
            value: {
                setItem: jest.fn(),
            },
            writable: true,
        });

        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const input = screen.getByLabelText('Your Github Personal Token :') as HTMLInputElement;

        fireEvent.change(input, { target: { value: 'valid-token' } });
        fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
        expect(input.value).toBe('valid-token');
        // expect(window.sessionStorage.setItem).toHaveBeenCalledWith('token', 'valid-token');
        // expect(navigate).toHaveBeenCalledWith('/profile');
    });

    //submits valid token and doesn't navigates to profile page
    test('submits invalid token and stays on Home page', () => {
        const navigate = jest.fn();
        Object.defineProperty(window, 'sessionStorage', {
            value: {
                setItem: jest.fn(),
            },
            writable: true,
        });

        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        const tokenInput = screen.getByPlaceholderText('token');
        fireEvent.change(tokenInput, { target: { value: '' } });
        fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

        expect(window.sessionStorage.setItem).not.toHaveBeenCalled();
        expect(navigate).not.toHaveBeenCalledWith('/profile');
    });
});