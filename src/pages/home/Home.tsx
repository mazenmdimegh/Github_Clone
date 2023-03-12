import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BtnPrimary, Formm, HomeContainer, Label } from './styles';
import { Icon } from '@iconify/react';


const Home: React.FC = () => {

const navigate = useNavigate();

  return (
    <HomeContainer>
      <Icon icon="mdi:github" color="black" width={100}/>
      <h3>welcome to Github</h3>
      <div className='formContainer'>
        <Formm
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            token: { value: string };
          };
          const token = target.token.value;
          if (token!=""){
            //store The Token in The Session Storage
            window.sessionStorage.setItem("token", token)
            navigate('/profile');
          }
        }}>
          <div className="form-group">
            <Label htmlFor="exampleInputEmail1">Your Github Personal Token :</Label>
            <input type="text" name="token" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Token"/>
          </div>
          <BtnPrimary type="submit" className="btn btn-primary w-100">Submit</BtnPrimary>
        </Formm>
      </div>
    </HomeContainer>
  )
}

export default Home