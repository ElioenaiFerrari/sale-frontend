import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from './styles';

export default function Input(props) {
  const dispatch = useDispatch();

  return (
    <Container>
      <input
        {...props}
        onChange={e => dispatch(props.action(e.target.value))}
      />
    </Container>
  );
}
