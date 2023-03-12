import { Icon } from '@iconify/react';
import { Active, Collapse, Len, Navbar, RightNav } from './styles';

// Interface for HeaderProps with a single property length of type number
export interface HeaderProps {
    //   // repositories: Record<string, any>;
    length: number;
}

// Defining a functional component Header that accepts HeaderProps
function Header(props: HeaderProps) {

    const { length } = props;// Destructuring the length property from props object
    
    return (
        <Navbar className="navbar navbar-expand-lg navbar-light border-bottom mt-2 ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <RightNav/>

            <Collapse className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item  d-flex align-items-center mx-2">
                        <Icon icon="octicon:book-16" width="16" /><a className="nav-link text-dark" href="#">Overview <span className="sr-only"></span></a>
                    </li>
                    <Active className="nav-item active d-flex align-items-center mx-2">
                        <Icon icon="octicon:repo-16" width="18" /> <a className="nav-link text-dark" href="#">Repositories<Len>{length}</Len> </a>
                    </Active>
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
            </Collapse>
        </Navbar>
    )
}

export default Header