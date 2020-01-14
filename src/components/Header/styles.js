import styled from 'styled-components';
import { darkColor, lightColor } from '../../colors';

export const Container = styled.div`
  flex: 1;
  max-height: 80px;
  background: linear-gradient(90deg, ${darkColor}, ${lightColor});
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;

  h1 {
    color: #fff;
    font-size: 52px;
    font-weight: bold;
  }
`;
