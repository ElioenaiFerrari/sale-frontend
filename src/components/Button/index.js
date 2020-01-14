import React from 'react'

import { Container } from './styles'

export default function Button(props) {
  return (
    <Container>
      <button onClick={props.action} {...props}>
        {props.text}
      </button>
    </Container>
  )
}
