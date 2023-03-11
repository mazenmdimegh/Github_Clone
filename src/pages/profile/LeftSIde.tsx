import React from 'react'
import avatar from '../../assets/images/mazen.jpg'
import { Icon } from '@iconify/react';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';

export interface LeftSideProps {
  userDetails: Record<string, any>;
  isLoading: boolean;
}

function LeftSIde(props: LeftSideProps) {
  const { userDetails, isLoading } = props;
  console.log("userDetails",userDetails)
  return (
    <div>
      {userDetails ?
        <div className='LeftSIdeWrapper text-secondary'>          
          <img className='avatar position-relative' src={userDetails.avatarUrl} alt="Avatar" />
          <p className='text-secondary text-capitalize'>{userDetails.login}</p>
          <button type="button" className="btn btn-outline-secondary btn-sm btn-block Edit mb-3">Edit profile</button>
          <small className='d-flex align-items-center'><Icon icon="mdi:user-supervisor" width="22" /> <span className='text-dark px-1'>{userDetails.followers.totalCount}</span>  follower · <span className='text-dark px-1'>{userDetails.following.totalCount}</span> following</small>
          <div className='border-top  py-3 my-4' >
            <h6 className='text-dark'>Highlights</h6>
            <div className='d-flex'>
              <Icon icon="octicon:star-16" width="20" />
              <p className='Pro border text-primary  mx-2  '>PRO</p>
            </div>
          </div>
        </div>
        :
        <div className='LeftSIdeWrapper text-secondary'>
          <Skeleton
            circle
            height="300px"
            width="300px"
            containerClassName="avatar-skeleton"
            className='avatar'
          />
          <Skeleton />
          <button type="button" className="btn btn-outline-secondary btn-sm btn-block Edit mb-3">Edit profile</button>
          <Skeleton />
          <div className='border-top  py-3 my-4' >
            <h6 className='text-dark'>Highlights</h6>
            <div className='d-flex'>
              <Icon icon="octicon:star-16" width="20" />
              <p className='Pro border text-primary  mx-2  '>PRO</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default LeftSIde