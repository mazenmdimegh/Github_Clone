import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { ErrorWrapper, NotFoundContainer } from './styles';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <NotFoundContainer>
            <ErrorWrapper className='d-grid justify-items-center text-center'>
                <Icon icon="mdi:github" color="black" width={100}/>
                <h3 className='text-light'>Unable to access GitHub API : bad credentials</h3>
                <div className='formContainer'>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>Back Home</button>
                </div>
            </ErrorWrapper>
        </NotFoundContainer>
    )
}

export default NotFound