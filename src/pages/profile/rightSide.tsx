import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react'
import RepoDetails from '../../components/RepoDetails/RepoDetails'
import { GetRepositories, SearchUserRepositories } from '../../queries/queries';


// export interface RightSideProps {
//   // repositories: Record<string, any>;
//   isLoading: boolean;
// }


function RightSide() {
  // const {  isLoading } = props;
  // const [isLoading, setIsLoading] = useState(false);
  const [repositories, setRepositories] = useState<Record<string, any>>();
  const [keyword, setKeyword] = useState("");
  const username: string | null = window.sessionStorage.getItem("username")

  // console.log(isLoading)

  // Search("react");
  // if (repositories) {
  //   console.log("from child data", repositories)
  // }
  // Search(keyword)

  // function Search (queryString: string) {
  //   const { loading, error, data } = useQuery(SearchUserRepositories(keyword,"mazenmdimegh"), {
  //     variables: { queryString, username },
  //   });
  //   console.log("NewSearch",data);
  //   setRepositories(data);
  //   setIsLoading(loading);
  // }
  const token: string | null = window.sessionStorage.getItem("token")

  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: new InMemoryCache(),
  });
  useEffect(() => {
    // Query choice
    client.query({
      query: SearchUserRepositories(keyword, "mazenmdimegh"),
    })
      .then(result => {
        // Sort the repositories by the updatedAt field
        const sortedRepositories = result.data.search.nodes.slice().sort((a:any, b:any) => {
          const dateA = new Date(a.updatedAt).getTime();
          const dateB = new Date(b.updatedAt).getTime();
          return dateB - dateA;
        });
        setRepositories(sortedRepositories);
        // console.log(result.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [keyword]);
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }
  return (
    <div className='rightSide'>
      <form>
        <div className="form-row border-bottom py-3">
          <div className="form-group">
            <input type="text" className="form-control" value={keyword} onChange={handlechange} id="inputCity" placeholder='Find a repository...' />
          </div>

          <div className="btn-groupp" role="group" aria-label="Button group with nested dropdown">

            <div className="btn-groupp btn1" role="group">
              <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Type
              </button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="#">Dropdown link</a>
                <a className="dropdown-item" href="#">Dropdown link</a>
              </div>
            </div>
            <div className="btn-groupp" role="group">
              <button id="btnGroupDrop2" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Language
              </button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop2">
                <a className="dropdown-item" href="#">Dropdown link</a>
                <a className="dropdown-item" href="#">Dropdown link</a>
              </div>
            </div>
          </div>
        </div>
      </form>
      {repositories ?
        repositories.map((repo: any) =>
        (<div key={repo.id}>
          <RepoDetails
            isLoading={true}
            repos={repo}
          // id={repo.id}
          // name={repo.name}
          // url={repo.url}
          // primaryLanguage={repo.primaryLanguage}
          // forkCount={repo.forkCount}
          // updatedAt={repo.updatedAt}
          // description={repo.description}
          />
        </div>))
        :
        <div>
          <RepoDetails
            isLoading={true}
          />
          <RepoDetails
            isLoading={true}
          />
          <RepoDetails
            isLoading={true}
          />
        </div>
      }

    </div>
  )
}

export default RightSide