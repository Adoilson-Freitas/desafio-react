import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;


  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #005c99;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#005c99')};
      }
    }
  }

  .empty {
    display: none;
   text-align: center;
   padding: 120px;
   font-size: 20px;
   color: #333;
  }

  .show {
    display: flex;
  }

  @media screen and (max-width: 600px) {
  footer {
    flex-direction: column-reverse;
  }
}
`;


export const Container2 = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;


  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #005c99;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#005c99')};
      }
    }
  }

  @media screen and (max-width: 600px) {
  footer {
    flex-direction: column-reverse;
  }
}
`;


export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }
  .subtotal { 
    display: flex;
    align-items: baseline;
    span {
      display: none;
    }
  }
  strong.frete {
    display: flex;
    align-items: baseline;
    font-size: 12px;
    padding-top: 10px;

    span {
      font-size: 10px;
      font-weight: normal;
      margin-left: 4px;

    }
  }
  .sublinhar {
    text-decoration: line-through;
    color: #777;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #555;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #005c99;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#005c99')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#005c99')};
        cursor: not-allowed;
      }
    }
  }

  @media screen and (max-width: 600px) {
    th {
      display: none;
    }
   
    tbody td {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-bottom: none;
     
    }
    .subtotal { 
    span {
      display: flex;
    }
  }
    .delete {
      position: relative;
      bottom: 350px;
      left: 98%;
    }
    .frete {
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;
      width: 100%;
      justify-content: center;
    }
    }
  
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 25px;
    margin-left: 5px;
  }
`;
