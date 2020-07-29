import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  display: flex;
  padding-top: 150px;

  small {
    color: red;
    font-weight: 500;
  }
`;

export const LoginCard = styled.div`
  display: flex;
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  border: solid 2.5px #fad206;
  -webkit-box-shadow: 2px 2px 14px 0px rgba(50, 50, 50, 0.4);
  -moz-box-shadow: 2px 2px 14px 0px rgba(50, 50, 50, 0.4);
  box-shadow: 2px 2px 14px 0px rgba(50, 50, 50, 0.4);
`;

export const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 15px;
    color: #fad206;
  }
`;

export const RightCard = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #50758d;
  }

  form {
    > button {
      display: flex;
      margin-top: 30px;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 16px;
      font-weight: 700;
      background: #fff;
      border: solid 2px #fad206;
      color: #50758d;
      padding: 8px;
      border-radius: 8px;

      &:hover {
        border: solid 2px #eac007;
        color: #2b4656;
        transition: border 0.2s;
        transition: color 0.2s;
      }
    }
  }
`;

export const AreaProxOrRetu = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;

  > button {
    opacity: ${({ disabledButton }) => (disabledButton ? 1 : 0.5)};
    cursor: ${({ disabledButton }) =>
      disabledButton ? 'pointer' : 'not-allowed'};
    background: 0;
    border: 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    color: #50758d;
    transition: color 0.3s;

    &:hover {
      color: #2b4656;
    }
  }

  a {
    background: 0;
    border: 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    color: #50758d;
    transition: color 0.3s;

    &:hover {
      color: #2b4656;
    }
  }
`;

export const ButtonRegister = styled.button`
  margin-left: 8px;
  height: 35px;
  padding: 8px 12px;
  font-weight: 500;
  background: transparent;
  border-radius: 6px;
  border: solid 1.5px #fad206;
  color: #50758d;
  transition: border 0.2s;
  transition: color 0.2s;

  &:hover {
    color: #2b4656;
    border: solid 1.5px #eac007;
  }
`;

export const CardWelcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 550px;
  margin: 0 25px;
`;

export const AreaText = styled.div`
  text-align: center;

  h2 {
    font-size: 40px;
    color: #50758d;

    span {
      color: #fad206;
    }
  }

  p {
    margin-top: 20px;
    font-size: 18px;

    a {
      text-decoration: none;
      color: #50758d;
      font-weight: 500;
    }
  }
`;
