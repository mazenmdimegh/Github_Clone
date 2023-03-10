import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import LeftSIde from './LeftSIde'
import RightSide, { RightSideProps } from './rightSide'
import "./Profile.scss"
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom'
import { GetRepositories } from '../../queries/queries'
import NotFound from '../../components/NotFound/NotFound'


const Profile: React.FC = () => {
  const [data, setData] = useState<null | Record<string, any>>(null);
  const [repositories, setRepositories] = useState<null | Record<string, any>>(null);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const token: string | null = window.sessionStorage.getItem("token")
  console.log(token)
  // const token = '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';
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: new InMemoryCache(),
  });

  client.query({
    query: GetRepositories,
  })
    .then(result => {
      // setRepositories(result.data);
      console.log(result.data)
    })
    .catch(error => {
      console.error(error);
      setError(true);
    });

  return (
    <div>
      {/* {data ?
        // <ChildComponent data={data as ChildComponentProps['data']} />
        <div>
          <NavBar />
          <div className='d-flex justify-content-center mx-lg-5 px-5'>
            <LeftSIde />
            {/* <RightSide data={data as RightSideProps['data']} /> /}
          </div>
        </div>
        :
        <div>
          <NotFound />
        </div>} */}
      {/* {!error &&
        <div>
          <NavBar />
          <div className='d-flex justify-content-center mx-lg-5 px-5'>
            <LeftSIde />
            <RightSide data={data as RightSideProps['data']}/>
          </div>
        </div>
      }
      {error &&
        <div>
          <NotFound/>
        </div>
      } */}
      <div>
        <NavBar />
        <div className='d-flex justify-content-center mx-lg-5 px-5'>
          <LeftSIde />
          <RightSide data={repositories as RightSideProps['data']} />
        </div>
      </div>
    </div>
  )
}

export default Profile