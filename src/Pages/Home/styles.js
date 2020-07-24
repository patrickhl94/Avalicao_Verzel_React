import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 150px auto;
  max-width: 1080px;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
`;
export const CardWelcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
