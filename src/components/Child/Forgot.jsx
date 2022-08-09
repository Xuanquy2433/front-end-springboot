import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Child/LoginNew/Input";
import Icon from "../Child/LoginNew/Icon";
import Button from "../Child/LoginNew/Button";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { API_USER_FORGOT, API_USER_REGISTER } from "../utils/const";
import { toast } from "react-toastify";

function Forgot() {

  const [data, setData] = useState({
    username: "",
    name: "",
    role: "user",
    password: "",
    email: ''
  });

  var sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

  var wait = async () => {
    await sleep(2000)
    console.log("showing after one second")
    window.location.reload(false)
  }


  const onForgot = async (e) => {
    console.log("forgot", data);
    if (data.username === '' && data.email === '') {
      console.log("loi valid");
      toast.error(" Error fields! ");
    }
    else if (data.username === '') {
      toast.error(" Username required fields! ");

    } else if (data.email === '') {
      toast.error(" Email required fields! ");

    }
    else {
      try {
        const reponse = await axios.post(API_USER_FORGOT, data);
        if (reponse && reponse.status == 200) {
          console.log(" sucsess");
          toast.success(" success");
          wait();
        }
      } catch (error) {
        toast.error("Username or email does not exist ! ");
      }
    }
  };


  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <div class="modal-dialog modal-login" >
      <div class="modal-content2" >
        <MainContainer  >
          <WelcomeText style={{ marginBottom: "50px" }}>Welcome</WelcomeText>
          <InputContainer >
            {/* <Input type="text" placeholder="Name"
              required="required"
              onChange={(e) => setData({ ...data, name: e.target.value })} /> */}
            <Input type="text" placeholder="Email"
              required="required"
              onChange={(e) => setData({ ...data, email: e.target.value })} />
            <Input type="text" placeholder="UserName"
              required="required"
              onChange={(e) => setData({ ...data, username: e.target.value })} />
            {/* <Input type="password" placeholder="Password"
              required="required"
              onChange={(e) => setData({ ...data, password: e.target.value })} /> */}
          </InputContainer>
          <ButtonContainer style={{ marginTop: "75px" }} >
            <Button content="Submit" onClick={(e) => {
              onForgot(e);
            }} />
          </ButtonContainer>
          <LoginWith>OR LOGIN WITH</LoginWith>
          <HorizontalRule />
          <IconsContainer>
            <Icon color={FacebookBackground}>
              <FaFacebookF />
            </Icon>
            <Icon color={InstagramBackground}>
              <FaInstagram />
            </Icon>
            <Icon color={TwitterBackground}>
              <FaTwitter />
            </Icon>
          </IconsContainer>
          {/* <ForgotPassword style={{ marginTop: "0px" }} onClick={(e) => {
              onForgot(e);
            }} >Forgot Password ?</ForgotPassword> */}
        </MainContainer>
      </div>
    </div>
  );
}

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    @media only screen and (max-width: 320px) {
      width: 80vw;
      height: 90vh;
      hr {
        margin-bottom: 0.3rem;
      }
      h4 {
        font-size: small;
      }
    }
    @media only screen and (min-width: 360px) {
      width: 80vw;
      height: 90vh;
      h4 {
        font-size: small;
      }
    }
    @media only screen and (min-width: 411px) {
      width: 80vw;
      height: 90vh;
    }
  
    @media only screen and (min-width: 768px) {
      width: 80vw;
      height: 80vh;
    }
    @media only screen and (min-width: 1024px) {
      width: 70vw;
      height: 50vh;
    }
    @media only screen and (min-width: 1280px) {
      width: 30vw;
      height: 80vh;
    }
  `;

const WelcomeText = styled.h2`
    margin: 3rem 0 2rem 0;
  `;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    
  `;

const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const LoginWith = styled.h5`
    cursor: pointer;
  `;

const HorizontalRule = styled.hr`
    width: 90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    background-color: #ebd0d0;
    margin: 1.5rem 0 1rem 0;
    backdrop-filter: blur(25px);
  `;

const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0 3rem 0;
    width: 80%;
  `;

const ForgotPassword = styled.h4`
    cursor: pointer;
  `;

export default Forgot;
