import styled from 'styled-components';

export const Wrapper = styled.form`
  position: relative;
  width: 300px; /* Ширина поля поиска */
  margin: 20px auto; /* Отступы по краям */
`;
export const Input = styled.input`
   width: calc(100% - 20px); /* Ширина поля минус ширина кнопки */
  padding: 10px;
  font: inherit;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 20px; /* Радиус закругления */
  outline: none;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
export const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 40px; /* Ширина кнопки */
  height: 100%;
  background-color: transparent;
  border: none;
  border-left: 2px solid #ccc;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
