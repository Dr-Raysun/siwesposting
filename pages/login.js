import { auth, provider } from "../firebase.js";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Head from "next/head";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const siwesImage = "siwesImage.jpg";
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      // Handle Errors here.

      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
    });
  };
  return (
    <>
      <Container>
        <Head>
          <title>Login</title>
        </Head>
        <LoginContainer>
          <Logo src={siwesImage} />
          <Button onClick={signIn} variant="outlined">
            Sign in with Google
          </Button>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  background-image: url("siwesImage.jpg");
  background-repeat: no-repeat;

  background-size: cover;
  display: grid;
  place-items: center;
  height: 100vh;
  //background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
  //box-shadow: 0px 2px 80px -3px rgba(0, 0, 0, 0.2);
`;
const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;

const ContainerImage = styled.img`
  height: 100vh;
  width: 100%;
  // margin-bottom: 50px;
`;
