import React, { useEffect, useState } from 'react'
import NavBar, { HeaderProps } from '../../components/NavBar/NavBar'
import LeftSIde from './LeftSIde'
import RightSide from './rightSide'
import "./Profile.scss"
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import { useNavigate } from 'react-router-dom'
import { GetRepositories, GetRepositoryCount } from '../../queries/queries'
import NotFound from '../../components/NotFound/NotFound'


const Profile: React.FC = () => {
  // const [data, setData] = useState<null | Record<string, any>>(null);
  // const [repositories, setRepositories] = useState<null | Record<string, any>>(null);
  // const [userDetails, setUserDetails] = useState<null | Record<string, any>>(null);
  const [length, setLength] = useState(0);
  // const [loading, setLoading] = useState(true);

  // const navigate = useNavigate();
  const token: string | null = window.sessionStorage.getItem("token")
  // console.log(token)

  //Headers of the Http Request
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    //Query choice
    client.query({
      query: GetRepositoryCount,
    })
      .then(result => {
        setLength(result.data["viewer"].repositories.totalCount)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div>
        <NavBar length={length as HeaderProps['length']}/>
        <div className='d-flex justify-content-center mx-lg-5 px-5'>
          <LeftSIde />
           <RightSide />
        </div>
      </div>
    </div>
  )
}

export default Profile