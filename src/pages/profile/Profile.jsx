import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import LeftSIde from './LeftSIde'
import RightSide from './rightSide'
import "./Profile.scss"
function Profile() {
  return (
    <div>
        <NavBar/>
        <div className='d-flex'>
            <LeftSIde/>
            <RightSide/>
        </div>
    </div>
  )
}

export default Profile