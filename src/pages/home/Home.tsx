import React from 'react'
import "./Home.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiFillGithub } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
// const handleCLick = () => {
//   console.log('submiit')
//   useNavigate.("/products");

// }
const Home: React.FC = () => {

const navigate = useNavigate();

  return (
    <div className='homeContainer'>
      <AiFillGithub />
      <h3>welcome to Github</h3>
      <div className='formContainer'>
        <form
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
            <label htmlFor="exampleInputEmail1">Your Github Personal Token :</label>
            <input type="text" name="token" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Token"/>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Home