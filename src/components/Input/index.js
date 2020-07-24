import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Input = ({ data }) => {
  const [textInput, setTextInput] = useState('');

  const dispatch = useDispatch();

  dispatch({
    type: data.typeReducer,
    textInput,
  });

  const onChange = useCallback(
    event => setTextInput(event.target.value, data.name),
    [data.name],
  );

  return (
    <Container>
      <input onChange={onChange} type={data.type} placeholder=" " />
      <label>{data.name}</label>
    </Container>
  );
};

Input.propTypes = {
  data: PropTypes.shape({
    changeIpunt: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    typeReducer: PropTypes.string,
  }).isRequired,
};

export default Input;
