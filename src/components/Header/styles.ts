import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;
    h1 {
      margin-left: 2px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  div {
    margin-right: 10px;
    span {
      font-size: 12px;
      color: #fff;
      padding: 2px;
      border-radius: 6px;
      background-color: #ff0000;
    }
  }
  @media screen and (max-width: 400px) {
  div {
    display: none;
  }
}
`;
