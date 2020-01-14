import React from 'react'

import { Container } from './styles'
import { Input, Button } from '../index'
import { addEmail, addPassword } from '../../actions/users'
import { lightColor, darkColor } from '../../colors'

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <Container>
      <Input
        action={addEmail}
        type="email"
        style={{
          width: '200px',
          color: '#777'
        }}
        placeholder="Email"
      />
      <Input
        action={addPassword}
        type="password"
        style={{
          width: '200px',
          borderTop: '0.1px solid lightgray'
        }}
        placeholder="Password"
      />
      <Button
        action={() => {}}
        style={{
          background: `linear-gradient(90deg, ${darkColor}, ${lightColor})`,
          color: '#FFF',
          marginTop: '20px'
        }}
        text="Entrar"
        type="submit"
      />
    </Container>
  )
}
