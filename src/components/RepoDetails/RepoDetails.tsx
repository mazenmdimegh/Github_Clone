import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { calculateDaysSince } from '../../helpers/calculateDaysSince';
import { languages } from '../../helpers/LanguageDictionary';
import { RepoModel } from '../../models/RepoModel';
import { Button, Language, LanguageColor, Public, Title } from './styles';

// Defining Props interface for ChildComponent
export interface ChildComponentProps {
    repos?: RepoModel;
    isLoading: boolean;
}

// Defining ChildComponent
function RepoDetails(props: ChildComponentProps) {

    // Extracting props
    const { repos, isLoading } = props;
    
    // Defining state variables
    const [languageName, setLanguageName] = useState<null | Record<string, any>>();

    useEffect(() => {
        if (repos) {
            setLanguageName((repos.primaryLanguage))
        }
        // languageName ?console.log('colorr',languages[languageName["name"]["color"]]) : console.log("no Color");

    }, []);
    // languageName ?console.log('colorr',languages[languageName["name"]]["color"]) : console.log("no Color");

    return (
        <div>
            // If repos are available, render the following
            {repos ? <div className='d-flex border-bottom justify-content-between py-3'>
                <div>
                    <div className='d-flex align-items-baseline'>
                        <h5 className='text-primary text-capitalize '><Title href={repos.url}>{repos.name}</Title> </h5>
                        {!repos.isPrivate ?
                            <Public className='border text-secondary  mx-2 px-1'>Public</Public>
                            :
                            <Public className='border text-secondary  mx-2 px-1'>Private</Public>
                        }
                    </div>
                    <p>{repos.description}</p>
                    {languageName && <Language className='text-secondary'>
                        <LanguageColor colorr={languageName ? languages[languageName["name"]]["color"] : "#fff"} />{languageName["name"]}  <span className='px-3'>Updated {calculateDaysSince(repos.updatedAt)}</span></Language>}
                </div>
                <div>
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <Button type="button" className="btn btn-secondary d-flex justify-content-center align-items-center py-1">
                            <Icon icon="octicon:star-16" width="16" /><a className="nav-link text-dark px-2" href="#">Star</a></Button>
                        <div className="btn-group" role="group">
                            <Button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </Button>
                            {/* <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-item" href="#">Dropdown link</a>
                                <a className="dropdown-item" href="#">Dropdown link</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
                :
                // If repos are not available, render a skeleton
                <div className='d-flex border-bottom justify-content-between py-3'>
                    <div>
                        <div className='d-flex align-items-baseline'>
                            <Skeleton style={{ width: 100 }} />
                            <Public className='border text-secondary  mx-2 px-1'>Public</Public>
                        </div>
                        <Skeleton />
                    </div>
                    <div>
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <Button type="button" className="btn btn-secondary d-flex justify-content-center align-items-center py-1">
                                <Icon icon="octicon:star-16" width="16" /><a className="nav-link text-dark px-2" href="#">Star</a></Button>
                            <div className="btn-group" role="group">
                                <Button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </Button>
                                {/* <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default RepoDetails