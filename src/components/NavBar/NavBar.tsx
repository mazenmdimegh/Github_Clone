import React from 'react'
import { FiBookOpen } from 'react-icons/fi'
import './NavBar.scss'
import { Icon } from '@iconify/react';

const NavBar: React.FC = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom mt-2 ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='rightNav'>

            </div>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item  d-flex align-items-center mx-2">
                        <Icon icon="octicon:book-16" width="16" /><a className="nav-link text-dark" href="#">Overview <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active d-flex align-items-center mx-2">
                        <Icon icon="octicon:repo-16" width="18" /> <a className="nav-link text-dark" href="#">Repositories</a>
                    </li>
                    <li className="nav-item d-flex align-items-center mx-2">
                        <Icon icon="octicon:table-16" width="16" /> <a className="nav-link text-dark" href="#">Projects</a>
                    </li>
                    <li className="nav-item d-flex align-items-center mx-2">
                        <Icon icon="octicon:package-16" width="16" /><a className="nav-link  text-dark" href="#">Packages</a>
                    </li>
                    <li className="nav-item d-flex align-items-center mx-2">
                        <Icon icon="octicon:star-16" width="16" /><a className="nav-link text-dark" href="#">Stars</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar