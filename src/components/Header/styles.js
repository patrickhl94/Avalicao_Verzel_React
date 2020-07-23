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
    color: #2d2d2d;
    margin-left: 20px;
    transition: opacity 0.3s;
  }

  > :hover {
    opacity: 0.6;
    border-bottom: solid 2.5px black;
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
    border: solid 1.5px #c9a700;
    color: #c9a700;
    transition: border 0.2s;
    transition: color 0.4s;
  }

  > :hover {
    color: #fad206;
    border: solid 1.5px #fad206;
  }
`;
