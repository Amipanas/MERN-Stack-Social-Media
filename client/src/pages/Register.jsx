import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Logo from '../assets/logo.png';

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };
  const handleChage = (event) => {};
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">

            <img src={Logo} alt="LOGO" />
            <h1>Hamta Social</h1>
          </div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => handleChage}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChage}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChage}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(e) => handleChage}
            />
            <button type="submit">Create User</button>
            <span style={{textAlign: "center"}}>
                Already have account?
                <Link to='/login'>Login</Link>
            </span>

        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:1rem;
  align-items:center;
  background-color:#131324;
  
  .brand {
    display:flex;
    justify-content: center;
    gap:1rem;
    align-items:center;

      img {
        height:5rem;
      }

      h1{color:deepskyblue}
    }
    form{
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background-color: #00000076;
      border-radius: 2rem;
      padding: 3rem 5rem;
      box-shadow: 0px 0px 10px deepskyblue;

      input{
        background-color: transparent;
        padding:1rem;
        border: 0.1rem solid deepskyblue;
        border-radius: 0.4rem;
        color: deepskyblue;
        width: 100%;
        font-size: 1rem;
        &:focus{
          border: #4e0eff 0.1rem solid;
          outline: none;
        }
      }
      button{
        background-color: deepskyblue;
        color: #00000098;
        padding: 1rem 2rem;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
      }
    }
`;

export default Register;
