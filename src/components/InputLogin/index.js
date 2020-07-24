import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Input = ({ data }) => {
  return (
    <Container>
      <input type={data.type} placeholder=" " />
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

export default connect()(Input);
