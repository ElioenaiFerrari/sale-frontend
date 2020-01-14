import React from 'react'

import { Container } from './styles'
import { Login, Sign } from '../../components'

export default function Home() {
  return (
    <Container>
      <Login />
      <Sign />
    </Container>
  )
}
