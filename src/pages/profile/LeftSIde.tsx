import React, { useEffect, useState } from 'react'
import avatar from '../../assets/images/mazen.jpg'
import { Icon } from '@iconify/react';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GetUserDetails } from '../../queries/queries';
import { Avatar, Edit, LeftSIdeWrapper, Pro } from './styles';


const LeftSIde: React.FC = () => {
  
  const [userDetails, setUserDetails] = useState<Record<string, any>>();
  const token: string | null = window.sessionStorage.getItem("token")

  //creating instance of Apollo client using GraphQL API URL
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: new InMemoryCache(),
  });
  useEffect(() => {
    // Query for getting user details using GraphQL API
    client.query({
      query: GetUserDetails,
    })
      .then(result => {
        setUserDetails(result.data.viewer);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      {userDetails ?
      // Displaying the user details
        <LeftSIdeWrapper >
          <Avatar className='position-relative' src={userDetails.avatarUrl} alt="Avatar" />
          <p className='text-secondary text-capitalize'>{userDetails.login}</p>
          <p className='text-secondary text-capitalize'>{userDetails.bio}</p>
          <p className='text-secondary text-capitalize'>{userDetails.email}</p>
          <Edit type="button" className="btn btn-outline-secondary btn-sm btn-block mb-3">Edit profile</Edit>
          <small className='d-flex align-items-center'><Icon icon="mdi:user-supervisor" width="22" /> <span className='text-dark px-1'>{userDetails.followers.totalCount}</span>  follower · <span className='text-dark px-1'>{userDetails.following.totalCount}</span> following</small>
          <div className='border-top  py-3 my-4' >
            <h6 className='text-dark'>Highlights</h6>
            <div className='d-flex'>
              <Icon icon="octicon:star-16" width="20" />
              <Pro className=' border text-primary  mx-2  '>PRO</Pro>
            </div>
          </div>
        </LeftSIdeWrapper>
        :
        // Displaying a loading skeleton until the user details are loaded
        <LeftSIdeWrapper className='text-secondary'>
          <Skeleton
            circle
            height="300px"
            width="300px"
            containerClassName="avatar-skeleton"
            className='avatar'
          />
          <Skeleton />
          <Edit type="button" className="btn btn-outline-secondary btn-sm btn-block mb-3">Edit profile</Edit>
          <Skeleton />
          <div className='border-top  py-3 my-4' >
            <h6 className='text-dark'>Highlights</h6>
            <div className='d-flex'>
              <Icon icon="octicon:star-16" width="20" />
              <Pro className='border text-primary mx-2'>PRO</Pro>
            </div>
          </div>
        </LeftSIdeWrapper>
      }
    </div>
  )
}

export default LeftSIde