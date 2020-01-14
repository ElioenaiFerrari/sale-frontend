import styled from 'styled-components';
import { lightColor, darkColor } from '../../colors';

export const Container = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;

  .card {
    width: 30%;
    height: 300px;
    margin: 10px 0;
    padding: 20px 10px;
    transition: box-shadow 0.1s ease-in-out, width 0.1s ease-in-out,
      height 0.1s ease-in-out;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

    border-radius: 2px;
  }

  .card:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
    width: 60%;
    height: 500px;
  }

  .card:hover img {
    height: 80%;
    width: 100%;
  }

  .card:hover .description {
    opacity: 1;
  }

  .card:hover .title {
    font-size: 0;
  }

  .title {
    text-align: center;
    color: ${lightColor};
    transition: font-size 0.1s ease-in-out;
  }

  img {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 200px;
    border-radius: 2px;
    transition: height 0.1s ease-in-out, width 0.1s ease-in-out;
  }

  .description {
    color: ${darkColor};
    text-align: justify;
    font-size: 18px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    font-weight: bold;
  }
`;
