import styled from "styled-components";

export const HomeContainer = styled.div`
  background-image: url("https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  width: 100%;
  height: 100vh;
  background-size: cover;
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  display: flex;
  align-items: center;
  flex-direction: column; 
  padding-top: 100px ;
  `;
export const Label  = styled.label`
   margin-bottom: 5px;
  `;
export const BtnPrimary  = styled.button`
  margin-top: 20px;
  `;
export const Formm  = styled.form`
  padding: 20px;
  background-color: rgb(59 138 151);
  border-radius: 20px;
  width: 350px;    
  margin-top: 20px ;
  `;
  