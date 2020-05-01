import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo" />
      <Title>Explore repositórios no github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/1903055?s=460&u=4c2ada7eb0c44946848bc936669f337e5d72f8fd&v=4"
            alt="Guilherme"
          />
          <div>
            <strong>ts-node</strong>
            <p>Template node com typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/1903055?s=460&u=4c2ada7eb0c44946848bc936669f337e5d72f8fd&v=4"
            alt="Guilherme"
          />
          <div>
            <strong>ts-node</strong>
            <p>Template node com typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/1903055?s=460&u=4c2ada7eb0c44946848bc936669f337e5d72f8fd&v=4"
            alt="Guilherme"
          />
          <div>
            <strong>ts-node</strong>
            <p>Template node com typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
