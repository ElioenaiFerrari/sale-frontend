import React, { useEffect } from 'react'

import { Container } from './styles'
import courses from './courses'

import { Input, Select, Button } from '../index'
import { lightColor, darkColor } from '../../colors'
import { addEmail, addPassword, addCourse } from '../../actions/users'
import { useSelector } from 'react-redux'

export default function Sign() {
  const users = useSelector(state => state.users)

  useEffect(() => console.log(users), [users])
  return (
    <Container>
      <Input
        action={addEmail}
        style={{ width: '200px' }}
        placeholder="Email"
        type="email"
      />
      <Input
        action={addPassword}
        style={{ width: '200px', borderTop: '0.1px solid lightgray' }}
        placeholder="Password"
        type="password"
      />
      <Select
        action={addCourse}
        options={courses}
        style={{
          width: '220px',
          marginTop: '20px'
        }}
      />
      <Button
        text="Criar conta"
        style={{
          background: `linear-gradient(90deg, ${lightColor}, ${darkColor})`,
          color: '#FFF',
          marginTop: '20px'
        }}
        type="submit"
      />
    </Container>
  )
}
