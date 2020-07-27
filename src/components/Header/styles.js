import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 7px 15px;
`;

export const AreaLogo = styled(Link)`
  text-decoration: none;
  color: #fad206;
  display: flex;
  font-size: 11px;
  align-items: center;
  background: #eee;
  padding: 5px;
  border-radius: 10px;
`;
export const AreaMenu = styled.div`
  display: flex;

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    color: #50758d;
    margin-left: 20px;
    transition: opacity 0.3s;
    border-radius: 5px;
  }

  > :hover {
    opacity: 0.6;
    border-bottom: solid 3px #50758d;
  }
`;

export const AreaLogout = styled.div`
  display: flex;
  align-items: center;

  button {
    text-decoration: none;
    margin-left: 8px;
    height: 35px;
    padding: 8px 30px;
    font-weight: 500;
    background: transparent;
    border-radius: 6px;
    border: solid 1.5px #ff2121;
    color: #50758d;
    transition: border 0.2s;
    transition: color 0.2s;

    &:hover {
      color: #2b4656;
      border: solid 1.5px #dd0000;
    }
  }

  > span {
    font-size: 25px;
    font-weight: 700;
    color: #50758d;
    margin-right: 10px;
  }
`;

export const AreaLogin = styled.div`
  display: flex;

  a {
    text-decoration: none;
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
  }

  > :hover {
    color: #2b4656;
    border: solid 1.5px #eac007;
  }
`;
