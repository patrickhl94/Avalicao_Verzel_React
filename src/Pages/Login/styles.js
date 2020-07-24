import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  display: flex;
  padding-top: 150px;
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

export const AreaRegister = styled.div`
  display: flex;
  margin-top: 15px;

  p {
    margin-right: 5px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: #50758d;
  }
`;
