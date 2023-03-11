import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import LeftSIde, { LeftSideProps } from './LeftSIde'
import RightSide from './rightSide'
import "./Profile.scss"
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import { useNavigate } from 'react-router-dom'
import { GetRepositories } from '../../queries/queries'
import NotFound from '../../components/NotFound/NotFound'


const Profile: React.FC = () => {
  const [data, setData] = useState<null | Record<string, any>>(null);
  const [repositories, setRepositories] = useState<null | Record<string, any>>(null);
  const [userDetails, setUserDetails] = useState<null | Record<string, any>>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const token: string | null = window.sessionStorage.getItem("token")
  console.log(token)

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
      query: GetRepositories,
    })
      .then(result => {
        setTimeout(() => {
          setLoading(false)
          console.log("Delayed for 1 second.");
        }, 500);
        setRepositories(result.data["viewer"].repositories.nodes)
        setUserDetails(result.data["viewer"]);
        setData(result.data);
        window.sessionStorage.setItem("username", result.data["viewer"].login)
        console.log(result.data)
      })
      .catch(error => {
        setLoading(false)
        console.error(error);
        setError(true);
      });
  }, []);

  return (
    <div>
      <ApolloProvider client={client}>
      <div>
        <NavBar />
        <div className='d-flex justify-content-center mx-lg-5 px-5'>
          <LeftSIde isLoading={loading} userDetails={userDetails as LeftSideProps['userDetails']}/>
           <RightSide 
          //  isLoading={loading} 
          //  repositories={repositories as RightSideProps['repositories']} 
           />
        </div>
      </div>
      </ApolloProvider>
    </div>
  )
}

export default Profile