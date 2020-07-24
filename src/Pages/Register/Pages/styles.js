import styled from 'styled-components';

export const AreaProxOrRetu = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;

  a {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    color: #50758d;
  }
`;

export const ButtonRegister = styled.button`
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

  &:hover {
    color: #2b4656;
    border: solid 1.5px #eac007;
  }
`;
