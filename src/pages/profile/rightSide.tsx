import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react'
import RepoDetails from '../../components/RepoDetails/RepoDetails'
import { GetUserDetails, SearchUserRepositoriesBytypeAndByLanguage } from '../../queries/queries';
import { Button, Clear, Container, Dropdown, DropdownItem, DropdownLanguage, Results, RightSideWrapper, Select, FormControlWrapper, BtnGroupp, BtnGrouppBtn } from './styles';


const RightSide: React.FC = () => {

  // Initializing state variables using the 'useState' hook
  const [searching, setSearching] = useState(false);
  const [typeSearch, settypeSearch] = useState("ALL");
  const [username, setUsername] = useState("");
  const [languageSearch, setlanguageSearch] = useState("ALL");
  const [repositories, setRepositories] = useState<Record<string, any>>();
  const [keyWord, setKeyword] = useState("");

  // Declaring and initializing arrays of possible values for repository types and programming languages
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

  // Retrieving the token from the session storage
  const token: string | null = window.sessionStorage.getItem("token");

  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: new InMemoryCache(),
  });

  // Using the 'useEffect' hook to execute the queries and set the state variables
  useEffect(() => {
    // Clearing the existing repositories before fetching new ones
    setRepositories(undefined);
    // Executing the GraphQL query for fetching user details
    client.query({
      query: GetUserDetails,
    })
      .then(result => {
        // Setting the username from the retrieved data
        setUsername(result.data.viewer.login);
        // Executing the GraphQL query for fetching repositories based on search parameters
        client.query({
          query: SearchUserRepositoriesBytypeAndByLanguage(keyWord, result.data.viewer.login, typeSearch, languageSearch),
        })
          .then(result => {
            // Sorting the repositories based on the last updated time
            const sortedRepositories = result.data.search.nodes.slice().sort((a: any, b: any) => {
              const dateA = new Date(a.updatedAt).getTime();
              const dateB = new Date(b.updatedAt).getTime();
              return dateB - dateA;
            });
            // Setting the sorted repositories as the state variable
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

    // Depending on the value of the state variables, the function inside the 'useEffect' hook will be executed
  }, [keyWord, typeSearch, languageSearch, username]);


  // Defining event handlers for input changes and button clicks
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // updates the state of 'keyword' with the value typed in the input box
    setKeyword(event.target.value)
      // checks if the input box is empty, and sets 'searching' state accordingly
    if (event.target.value == "") {
      setSearching(false);
    } else {
      setSearching(true);
    }
  }

  const handleSearchByType = (type: any) => {
      // updates the state of 'typeSearch' with the selected type
    if (type == "ALL") {
      settypeSearch("ALL")
    } else settypeSearch(type)
  }
  const handleSearchByLanguage = (language: any) => {
    // updates the state of 'languageSearch' with the selected language
    if (language == "ALL") {
      setlanguageSearch("ALL")
    } else setlanguageSearch(language)
  }
  const handleClear = () => {
     // clears all the search fields and sets 'searching' state to false
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
          {/*  input box for entering search keyword */}
            <input type="text" className="form-control " value={keyWord} onChange={handlechange} id="inputCity" placeholder='Find a repository...' />
          </FormControlWrapper>

          <BtnGroupp role="group" aria-label="Button group with nested dropdown">
          {/*  dropdown for selecting repository type to filter */}
            <BtnGrouppBtn role="group">
              <Button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Type
              </Button>
              <Dropdown className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <Select  >Select type</Select>
                {RepositoryTypes.map((reptype: any) =>
                (typeSearch == reptype ?
                  // if the type is selected, display it with a check icon
                  <DropdownItem className="dropdown-item border-bottom " ><span className='px-2'><Icon icon="material-symbols:check" width={18} /></span>{reptype.toLowerCase()}</DropdownItem>
                  :
                   // if the type is not selected, display it as clickable option
                  <DropdownItem className="dropdown-item border-bottom px-3" onClick={() => handleSearchByType(reptype)}><span className='px-4'>{reptype.toLowerCase()}</span></DropdownItem>
                )
                )}

              </Dropdown>
            </BtnGrouppBtn>
            {/* // dropdown for selecting repository language to filter */}
            <BtnGroupp role="group">
              <Button id="btnGroupDrop2" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Language
              </Button>
              <DropdownLanguage className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <Select  >Select type</Select>
                {Langauges.map((language: any) =>
                (languageSearch == language ?
                  // if the language is selected, display it with a check icon
                  <DropdownItem className="dropdown-item border-bottom " ><span className='px-2'><Icon icon="material-symbols:check" width={18} /></span>{language}</DropdownItem>
                  :
                  // if the language is not selected, display it as clickable option
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
        {/* // If repositories is truthy, map through the repositories and display each repo details */}
      {repositories ?
        repositories.map((repo: any) =>
        (<div key={repo.id}>
          <RepoDetails
            isLoading={true}
            repos={repo}
          />
        </div>))
        :
            // If repositories is falsy, show three repo details components with isLoading prop set to true to load Skeleton
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