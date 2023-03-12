import React, { useEffect, useState } from 'react'

import LeftSIde from './LeftSIde'
import RightSide from './rightSide'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useNavigate } from 'react-router-dom'
import { GetRepositoryCount, GetUserDetails } from '../../queries/queries'
import Header, { HeaderProps } from '../../components/Header';
import { SidesContainer } from './styles';


const Profile: React.FC = () => {
  
  const navigate = useNavigate();
  //state variable to store length of repositories owned by authenticated user
  const [length, setLength] = useState(0);
  //retrieve token from session storage
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
    //query to retrieve total count of repositories owned by authenticated user
    client.query({
      query: GetRepositoryCount,
    })
      .then(result => {
        //setting length state variable with total count of repositories
        setLength(result.data["viewer"].repositories.totalCount)
      })
      .catch(error => {
        console.error(error);
        //navigating to NotFound page if there is an error
        navigate('/NotFound')
      });
  }, []);

  return (
    <div>
      <div>
        <Header length={length as HeaderProps['length']}/>
        <SidesContainer className=' mx-lg-5 px-5'>
          <LeftSIde />
           <RightSide />
        </SidesContainer>
      </div>
    </div>
  )
}

export default Profile