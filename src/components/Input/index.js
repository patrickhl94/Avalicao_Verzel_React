import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Input = ({ data }) => {
  return (
    <Container>
      <input
        onChange={event => data.onChange(event.target.value, data.name)}
        type={data.type}
        placeholder=" "
      />
      <label>{data.label}</label>
    </Container>
  );
};

Input.propTypes = {
  data: PropTypes.shape({
    changeIpunt: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    typeReducer: PropTypes.string,
  }).isRequired,
};

export default Input;
