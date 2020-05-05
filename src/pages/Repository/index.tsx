import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

export const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/1903055?s=460&u=4c2ada7eb0c44946848bc936669f337e5d72f8fd&v=4"
            alt="Repo"
          />
          <div>
            <strong>gwelter/tsnode</strong>
            <p>descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>2</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>3</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="/">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};
