import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  button {
    background: transparent;
    border: none;
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border-radius: 2px;
    font-weight: bold;
    cursor: pointer;
  }

  button:active {
    opacity: 0.9;
  }
`;
