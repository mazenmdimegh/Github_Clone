import React from 'react'
import './NotFound.scss'
import { AiFillGithub } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className='notFoundContainer'>
            <div className='errorWrapper d-grid justify-items-center text-center'>
                <AiFillGithub />
                <h3 className='text-light'>Unable to access GitHub API : bad credentials</h3>
                <div className='formContainer'>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>Back Home</button>
                </div>
            </div>
        </div>
    )
}

export default NotFound