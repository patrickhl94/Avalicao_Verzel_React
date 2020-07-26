import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  -webkit-transition: all 0.5s 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;

  ${props => {
    if (
      (props.isOpenProp && props.isOpenState) ||
      (!props.isOpenProp && !props.isOpenState)
    ) {
      return css`
        opacity: 1;
        visibility: visible;
      `;
    }
    return css`
      opacity: 0;
      visibility: hidden;
    `;
  }};
`;

export const ModalBody = styled.div`
  margin: 0 100px;
  max-width: 700px;
  min-width: 600px;
  background: #fff;
  border-radius: 15px;
  padding-bottom: 40px;
  padding-left: 30px;
  border: 0;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border: solid 5px #fad206;
`;

export const ModalHeader = styled.div`
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    transition: background-color 0.2s;
    border-radius: 50%;

    &:hover {
      background-color: #d8ffef;
    }
  }
`;

export const AreaButtonRegister = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;

  button {
    margin-top: 15px;
    display: flex;
    border-radius: 5px;
    background: #fff;
    border: solid 2.5px #fad206;
    padding: 7px 25px;
    transition: border 0.2s;
    font-size: 16px;
    font-weight: 500;
    color: #50758d;
    transition: border 0.3s;
    transition: color 0.3s;

    &:hover {
      color: #2b4656;
      border: solid 2.5px #eac007;
    }
  }
`;
