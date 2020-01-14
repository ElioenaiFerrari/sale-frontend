import styled from 'styled-components'
import { darkColor, lightColor } from '../../colors'

export const Container = styled.div`
  select {
    background: transparent;
    border: none;
    color: ${lightColor};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 0 50px 50px 50px;
    transition: color 0.1s linear;
    cursor: pointer;
  }

  option {
    background: ${darkColor};
    color: #fff;
  }

  select:hover {
    color: ${darkColor};
  }
`
