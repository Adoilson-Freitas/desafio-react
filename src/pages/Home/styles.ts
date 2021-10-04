import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: -20px;

  form {
    position: absolute;
    top: 120px;
    left: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    strong {
      color: #fff;
      font-size: 20px;
      margin-right: 4px;
    }
    select {
      padding: 4px;
      color: #fff;
      border-color: #fff;
      border-radius: 6px;
      background-color: #005c99;
      cursor: pointer;
    }
  }

    @media screen and (max-width: 875px) {
    form {
      left: 2%;
    }
   }

   .star {
     display: flex;
   }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    transition: transform .5s;
    padding: 20px;
    margin-top: 30px;
    img {
      align-self: center;
      max-width: 250px;
    }

    .icon-car {
      width: 25px;
      margin-right: 4px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #005c99;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#005c99')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }

    &:hover {
      transform: scale(1.06);
    }
  }

  @media screen and (max-width: 540px) {
  li {
    width: 90%;
  }
}
`;
