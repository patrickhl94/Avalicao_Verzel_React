import React from 'react';

import { Container, CardWelcome, AreaText } from './styles';

import logo from '../../assets/images/logo.svg';

const Home = () => {
  return (
    <Container>
      <CardWelcome>
        <img src={logo} width="400px" alt="Imagem Logo ListStaks" />
        <AreaText>
          <h2>
            Bem vindo(a) ao <span>ListTask</span>
          </h2>
          <p>
            O ListTask é um projeto avaliativo desenvolvido em React, realizado
            para concorrer uma vaga de desenvolvedor frontend na{' '}
            <a href="https://www.verzel.com.br/">VERZEL</a>, empresa de
            desenvolvimento, consultoria e reestruturação de Sistemas de
            Informação.
          </p>
        </AreaText>
      </CardWelcome>
    </Container>
  );
};

export default Home;
