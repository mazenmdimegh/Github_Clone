import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react'
import RepoDetails from '../../components/RepoDetails/RepoDetails'
import { GetRepositories, SearchUserRepositories, SearchUserRepositoriesBytypeAndByLanguage } from '../../queries/queries';
import { RepositoryType } from '../../types/types';
import { Dropdown, DropdownItem, DropdownLanguage, Results, Select } from './styles';


// export interface HeaderProps {
//   // repositories: Record<string, any>;
//   isLoading: boolean;
// }


function RightSide() {
  // const {  isLoading } = props;
  const [searching, setSearching] = useState(false);
  const [typeSearch, settypeSearch] = useState("ALL");
  const [languageSearch, setlanguageSearch] = useState("ALL");
  const [repositories, setRepositories] = useState<Record<string, any>>();
  const [keyWord, setKeyword] = useState("");
  const username: string | null = window.sessionStorage.getItem("username")

  const token: string | null = window.sessionStorage.getItem("token");
  const RepositoryTypes = [ 
    'ALL',
    'PUBLIC', 
    'PRIVATE'];
  const Langauges = [
    "ALL",
    "TypeScript",
    "HTML",
    "JavaScript",
    "SCSS",
    "Solidity",
    "Java",
    "CSS",
    "C++",
    "PHP"];
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: new InMemoryCache(),
  });
  
  useEffect(() => {
    setRepositories(undefined);
    // console.log("typeSearch",typeSearch)
    // Query choice
    client.query({
      query: SearchUserRepositoriesBytypeAndByLanguage(keyWord, username,typeSearch,languageSearch),
    })
      .then(result => {
        // Sort the repositories by the updatedAt field
        const sortedRepositories = result.data.search.nodes.slice().sort((a: any, b: any) => {
          const dateA = new Date(a.updatedAt).getTime();
          const dateB = new Date(b.updatedAt).getTime();
          return dateB - dateA;
        });
        setRepositories(sortedRepositories);
        console.log(result.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [keyWord,typeSearch,languageSearch]);
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
    if(event.target.value==""){
      setSearching(false)
    }else{
      setSearching(true)
    }
  }
  const handleSearchByType=(type:any)=>{
    if(type=="ALL"){
      settypeSearch("ALL")
    }else settypeSearch(type)
  }
  const handleSearchByLanguage=(language:any)=>{
    if(language=="ALL"){
      setlanguageSearch("ALL")
    }else setlanguageSearch(language)
  }
  return (
    <div className='rightSide'>
      <form>
        <div className="form-row border-bottom py-3">
          <div className="form-group">
            <input type="text" className="form-control" value={keyWord} onChange={handlechange} id="inputCity" placeholder='Find a repository...' />
          </div>

          <div className="btn-groupp" role="group" aria-label="Button group with nested dropdown">

            <div className="btn-groupp btn1" role="group">
              <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Type
              </button>
              <Dropdown className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <Select  >Select type</Select>
                {RepositoryTypes.map((reptype: any) =>
                  (typeSearch==reptype?
                    <DropdownItem className="dropdown-item border-bottom " ><span className='px-2'><Icon icon="material-symbols:check" width={18}/></span>{reptype.toLowerCase()}</DropdownItem>
                    :
                  <DropdownItem className="dropdown-item border-bottom px-3" onClick={()=>handleSearchByType(reptype)}><span className='px-4'>{reptype.toLowerCase()}</span></DropdownItem>
                  )
                )}

              </Dropdown>
            </div>
            <div className="btn-groupp" role="group">
              <button id="btnGroupDrop2" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Language
              </button>
              <DropdownLanguage className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <Select  >Select type</Select>
                {Langauges.map((language: any) =>
                  (languageSearch==language?
                    <DropdownItem className="dropdown-item border-bottom " ><span className='px-2'><Icon icon="material-symbols:check" width={18}/></span>{language}</DropdownItem>
                    :
                  <DropdownItem className="dropdown-item border-bottom px-3" onClick={()=>handleSearchByLanguage(language)}><span className='px-4'>{language}</span></DropdownItem>
                  )
                )}

              </DropdownLanguage>
            </div>
          </div>
        </div>
      </form>
      {searching&&repositories?<Results><strong>{repositories.length}</strong> results for repositories matching <strong>{keyWord}</strong> sorted by <strong>last updated</strong></Results>:<div></div>}
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