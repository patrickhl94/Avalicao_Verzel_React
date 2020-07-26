import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px;
`;

export const AreaButonGegister = styled.div`
  display: flex;
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 15px;
    margin: 10px 21px;
    border-radius: 15px;
    border: 0;
    font-size: 20px;
    font-weight: 700;
    color: #50758d;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.7);
    -moz-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.7);
    box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.7);

    &:hover {
      border: solid 3px #fad206;
    }

    svg {
      margin-left: 10px;
    }
  }
`;

export const ContainerList = styled.div`
  max-width: 1020px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  border: solid 2.5px #fad206;
  -webkit-box-shadow: 2px 2px 14px 0px rgba(50, 50, 50, 0.4);
  -moz-box-shadow: 2px 2px 14px 0px rgba(50, 50, 50, 0.4);
  box-shadow: 2px 2px 14px 0px rgba(50, 50, 50, 0.4);
  width: 100%;
  background: #fff;

  h1 {
    color: #50758d;
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 95%;

    div {
      display: flex;
    }
  }
`;

export const Button = styled.button`
  margin: 0 10px;
  border-radius: 5px;
  background: #fff;
  border: solid 2.5px #fad206;
  width: 55px;
  padding: 5px;
  transition: border 0.2s;

  &:hover {
    border: solid 2.5px #eac007;
    svg {
      width: 20px;
    }
  }
`;

export const ListItem = styled.li`
  padding: 15px;
  background: #eee;
  border-radius: 15px;
  margin: 13px 0;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.7);
  -moz-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.7);
  box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.7);

  h2 {
    color: #444;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const AreaVisualizationTask = styled.div`
  background: #fff;
  margin: 20px 10px 0 10px;
  padding: 10px;
  border-bottom: solid 5px #fad206;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  div {
    display: flex;
    max-width: 500px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
