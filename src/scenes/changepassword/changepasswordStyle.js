import styled from "styled-components";
export const Container = styled.div`
  .Changepassword {
    text-align: center;
  }

  .Changepassword-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .Changepassword-logo {
      animation: Changepassword -logo-spin infinite 20s linear;
    }
  }

  .Changepassword-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .Changepassword-link {
    color: #61dafb;
  }

  @keyframes Changepassword-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css");

  * > * {
    font-family: "Poppins", cursive;
    margin: 0;
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(-135deg, #c850c0, #4158d0);
    background-size: cover;
  }

  .Changepassword {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .register {
    display: flex;
    height: 500px;
    width: 850px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0px;
    padding: 0px;
    margin-left: 100px;
    margin-top: 60px;
    margin-bottom: 60px;
    position: relative;
  }

  .flex {
    display: flex;
    gap: 1em;
  }

  .flex-col {
    flex-direction: column;
  }

  .register .col-2 {
    margin: auto;
    padding: 5em 0;
  }
  .register .col-1 img {
    width: 240px;
    height: 100%;
    object-fit: cover;
    align-self: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    margin-top: 100px;
    margin-left: 70px;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 40px;
  }

  button {
    outline: none !important;
    border: none;
    background: 0 0;
  }
  @media (max-width: 1024px) {
    .register {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }

    .register .col-1 img {
      width: 72px;
      margin-top: 180px;
      margin-left: 80px;
      margin-right: 30%;
    }

    .register .col-2 {
      width: 30%;
      height: 40%;
      margin-bottom: 80%;
    }

    .register .col-2 .group1 {
      width: 100%;
    }
    .register .col-2 .group2 {
      width: 100%;
    }
    .register .col-2 .group3 {
      width: 100%;
    }
  }
  .group1 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  .group2 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  .group3 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  .title {
    font-size: 24px;
    color: #333;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    display: block;
    padding-bottom: 40px;
    font-weight: 900;
  }

  .container-password-btn {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
  }

  .password-btn {
    font-family: Montserrat-Bold;
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    text-transform: uppercase;
    width: 100%;
    height: 50px;
    border-radius: 30px;
    background: #57b846;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
  }

  button {
    outline: none !important;
    border: none;
    background: 0 0;
  }

  input {
    font-family: Poppins-Medium;
    font-size: 15px;
    line-height: 1.5;
    color: #666;
    display: block;
    width: 100%;
    background: #e6e6e6;
    height: 50px;
    border-radius: 25px;
    padding: 0 30px 0 68px;
  }
  input {
    outline: none;
    border: none;
  }
  button,
  input {
    overflow: visible;
  }
  .group1 span {
    position: absolute;
    left: 20px;
    display: flex;
    margin: 15px 10px 15px;
  }

  .group2 span {
    position: absolute;
    left: 20px;
    display: flex;
    margin: 15px 10px 15px;
  }

  .group3 span {
    position: absolute;
    left: 20px;
    display: flex;
    margin: 15px 10px 15px;
  }
`;
