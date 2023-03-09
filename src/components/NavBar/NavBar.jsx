import React from 'react'
import {FiBookOpen} from 'react-icons/fi'
import './NavBar.scss'
import { Icon } from '@iconify/react';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light border-bottom mt-4 ">
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item  d-flex align-items-center mx-2">
                    <Icon icon="octicon:book-16" width="16" /><a class="nav-link text-dark" href="#">Overview <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item active d-flex align-items-center mx-2">
                    <Icon icon="octicon:repo-16" width="18"/> <a class="nav-link text-dark" href="#">Repositories</a>
                    </li>
                    <li class="nav-item d-flex align-items-center mx-2">
                    <Icon icon="octicon:table-16" width="16" /> <a class="nav-link text-dark" href="#">Projects</a>
                    </li>
                    <li class="nav-item d-flex align-items-center mx-2">
                    <Icon icon="octicon:package-16" width="16" /><a class="nav-link  text-dark" href="#">Packages</a>
                    </li>
                    <li class="nav-item d-flex align-items-center mx-2">
                    <Icon icon="octicon:star-16" width="16" /><a class="nav-link text-dark" href="#">Stars</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar