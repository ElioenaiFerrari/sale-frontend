import React from 'react'

import { Container } from './styles'
import { useDispatch } from 'react-redux'

export default function Select(props) {
  const dispatch = useDispatch()

  return (
    <Container>
      <select onChange={e => dispatch(props.action(e.target.value))} {...props}>
        {props.options.map(opt => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
    </Container>
  )
}
