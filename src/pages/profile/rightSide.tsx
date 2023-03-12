import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react'
import RepoDetails from '../../components/RepoDetails/RepoDetails'
import { GetUserDetails, SearchUserRepositoriesBytypeAndByLanguage } from '../../queries/queries';
import { RepositoryType } from '../../types/types';
import { Button, Clear, Container, Dropdown, DropdownItem, DropdownLanguage, Results, RightSideWrapper, Select ,FormControlWrapper, BtnGroupp, BtnGrouppBtn} from './styles';


// export interface HeaderProps {
//   // repositories: Record<string, any>;
//   isLoading: boolean;
// }


function RightSide() {
  // const {  isLoading } = props;
  const [searching, setSearching] = useState(false);
  const [typeSearch, settypeSearch] = useState("ALL");
  const [username, setUsername] = useState("");
  const [languageSearch, setlanguageSearch] = useState("ALL");
  const [repositories, setRepositories] = useState<Record<string, any>>();
  const [keyWord, setKeyword] = useState("");

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
    client.query({
      query: GetUserDetails,
    })
      .then(result => {
        setUsername(result.data.viewer.login);
        client.query({
          query: SearchUserRepositoriesBytypeAndByLanguage(keyWord, result.data.viewer.login, typeSearch, languageSearch),
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
      })
      .catch(error => {
        console.error(error);
      });
    // console.log("typeSearch",typeSearch)
    // Query choice
   

  }, [keyWord, typeSearch, languageSearch, username]);
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
    if (event.target.value == "") {
      setSearching(false);
    } else {
      setSearching(true);
    }
  }
  const handleSearchByType = (type: any) => {
    if (type == "ALL") {
      settypeSearch("ALL")
    } else settypeSearch(type)
  }
  const handleSearchByLanguage = (language: any) => {
    if (language == "ALL") {
      setlanguageSearch("ALL")
    } else setlanguageSearch(language)
  }
  const handleClear = () => {
    setKeyword("");
    settypeSearch("ALL");
    setlanguageSearch("ALL");
    setSearching(false)
  }
  return (
    <RightSideWrapper>
      <form>
        <div className="d-flex border-bottom py-3">
          <FormControlWrapper className="w-100">
            <input type="text" className="form-control " value={keyWord} onChange={handlechange} id="inputCity" placeholder='Find a repository...' />
          </FormControlWrapper>

          <BtnGroupp role="group" aria-label="Button group with nested dropdown">

            <BtnGrouppBtn role="group">
              <Button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Type
              </Button>
              <Dropdown className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <Select  >Select type</Select>
                {RepositoryTypes.map((reptype: any) =>
                (typeSearch == reptype ?
                  <DropdownItem className="dropdown-item border-bottom " ><span className='px-2'><Icon icon="material-symbols:check" width={18} /></span>{reptype.toLowerCase()}</DropdownItem>
                  :
                  <DropdownItem className="dropdown-item border-bottom px-3" onClick={() => handleSearchByType(reptype)}><span className='px-4'>{reptype.toLowerCase()}</span></DropdownItem>
                )
                )}

              </Dropdown>
            </BtnGrouppBtn>
            <BtnGroupp role="group">
              <Button id="btnGroupDrop2" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Language
              </Button>
              <DropdownLanguage className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <Select  >Select type</Select>
                {Langauges.map((language: any) =>
                (languageSearch == language ?
                  <DropdownItem className="dropdown-item border-bottom " ><span className='px-2'><Icon icon="material-symbols:check" width={18} /></span>{language}</DropdownItem>
                  :
                  <DropdownItem className="dropdown-item border-bottom px-3" onClick={() => handleSearchByLanguage(language)}><span className='px-4'>{language}</span></DropdownItem>
                )
                )}

              </DropdownLanguage>
            </BtnGroupp>
          </BtnGroupp>
        </div>
      </form>
      {searching && repositories ?
        <Container>
          <Results><strong>{repositories.length}</strong> results for repositories matching <strong>{keyWord}</strong> sorted by <strong>last updated</strong>
          </Results>
          <Clear onClick={handleClear}>
            <Icon icon="zondicons:close-solid" className='px-1' color="#57606a" width={28} />
            <div>Clear filter</div>
          </Clear>
        </Container>
        : <div></div>}
      {repositories ?
        repositories.map((repo: any) =>
        (<div key={repo.id}>
          <RepoDetails
            isLoading={true}
            repos={repo}
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

    </RightSideWrapper>
  )
}

export default RightSide