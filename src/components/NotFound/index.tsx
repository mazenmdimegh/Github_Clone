import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { ErrorWrapper, NotFoundContainer } from './styles';

// Define NotFound component as a functional component
const NotFound: React.FC = () => {

    // useNavigate hook to navigate to a different route
    const navigate = useNavigate();

    // Render the NotFoundContainer and its child components
    return (
        <NotFoundContainer>
            <ErrorWrapper className='d-grid justify-items-center text-center'>
                <Icon icon="mdi:github" color="black" width={100} />
                <h3 className='text-light'>Unable to access GitHub API : bad credentials</h3>
                <div className='formContainer'>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>Back Home</button>
                </div>
            </ErrorWrapper>
        </NotFoundContainer>
    )
}

export default NotFound