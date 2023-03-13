import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BtnPrimary, Formm, HomeContainer, Label } from './styles';
import { Icon } from '@iconify/react';

// Create a Home functional component
const Home: React.FC = () => {

  // Use navigate hook from react-router-dom
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      token: { value: string };
    };
    const token = target.token;
    if (token != undefined) {
      //store The Token in The Session Storage
      window.sessionStorage.setItem("token", token.value)
      // Navigate to the profile page

    }
    navigate('/profile');
  };
  // Render the following elements
  return (
    <HomeContainer>
      <Icon icon="mdi:github" color="black" width={100} />
      <h3>welcome to Github</h3>
      <div className='formContainer'>
        <Formm
          onSubmit={handleSubmit}>
          <div className="form-group">
            <Label htmlFor="exampleInputEmail1">Your Github Personal Token :</Label>
            <input type="text" name="token" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="token" />
          </div>
          <BtnPrimary type="submit" className="btn btn-primary w-100">Submit</BtnPrimary>
        </Formm>
      </div>
    </HomeContainer>
  )
}

export default Home