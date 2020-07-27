import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Input = ({ data }) => {
  return (
    <Container>
      <input
        onChange={event => data.onChange(event.target.value, data.name)}
        value={data.value || ''}
        type={data.type}
        placeholder={data.label}
      />
      <label>{data.label}</label>
    </Container>
  );
};

const TextArea = ({ data }) => {
  return (
    <Container>
      <textarea
        rows="4"
        onChange={event => data.onChange(event.target.value, data.name)}
        value={data.value || ''}
        type={data.type}
        placeholder={data.label}
      />
      <label>{data.label}</label>
    </Container>
  );
};

Input.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
};

TextArea.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
};

export { Input, TextArea };
