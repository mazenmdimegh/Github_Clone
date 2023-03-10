import { Icon } from '@iconify/react'
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import "./RepoDetails.scss"

const RepoDetails: React.FC = () => {

    return (
        <div className='d-flex border-bottom justify-content-between py-3'>
            <div>
                <div className='d-flex align-items-baseline'>
                    {/* <h4 className='text-primary'>Github_Clone </h4> */}
                    <Skeleton style={{width:100}}/>
                    <p className='Public border text-secondary  mx-2 px-1'>Public</p>
                </div>
                {/* <p className='language'><span className="repo-language-color" ></span> TypeScript <span className='px-3'>Updated 19 hours ago</span></p> */}
                <Skeleton />
            
            </div>
            <div>
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" className="btn btn-secondary d-flex justify-content-center align-items-center py-1">
                        <Icon icon="octicon:star-16" width="16" /><a className="nav-link text-dark px-2" href="#">Star</a></button>

                    <div className="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                        </button>
                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <a className="dropdown-item" href="#">Dropdown link</a>
                            <a className="dropdown-item" href="#">Dropdown link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepoDetails