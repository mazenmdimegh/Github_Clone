import React from 'react'
import avatar from '../../assets/images/mazen.jpg'
import { Icon } from '@iconify/react';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';

function LeftSIde() {
  return (
    <div className='LeftSIdeWrapper text-secondary'>
      <Skeleton
        circle
        height="300px"
        width="300px"
        containerClassName="avatar-skeleton"
        className='avatar'
      />
      {/* <img className='avatar' src="https://avatars.githubusercontent.com/u/87076261?v=4" alt="Avatar" /> */}
      {/* <p className='text-secondary'>Mazen mdimegh</p> */}
      <Skeleton />
      <button type="button" className="btn btn-outline-secondary btn-sm btn-block Edit mb-3">Edit profile</button>
      <Skeleton />
      {/* <small className='d-flex align-items-center'><Icon icon="mdi:user-supervisor" width="22" /> <span className='text-dark px-1'>1</span>  follower · <span className='text-dark px-1'>1</span> following</small> */}
      {/* <br></br */}
      <div className='border-top  py-3 my-4' >
        <h6 className='text-dark'>Highlights</h6>
        <div className='d-flex'>
          <Icon icon="octicon:star-16" width="20" />
          <p className='Pro border text-primary  mx-2  '>PRO</p>
        </div>
      </div>
    </div>
  )
}

export default LeftSIde