import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 15px;
  position: relative;
  margin: 25px 0;

  input {
    border: 0;
    border-bottom: 2px solid lightgrey;
    outline: none;
    color: #333;
    min-width: 180px;
    font-size: 18px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
    border-radius: 0;

    &:focus {
      border-bottom: 2px solid #50758d;
    }

    &::placeholder {
      color: transparent;
    }
  }

  label {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 13px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 16px;
    margin-top: -4px;
    color: #50758d;
  }
`;
