import React from 'react'

import { Container } from './styles'
import courses from './courses'

import { Input, Select, Button } from '../index'
import { lightColor, darkColor } from '../../colors'
import { addEmail, addPassword, addCourse } from '../../actions/users'
import { useSelector } from 'react-redux'
import api from '../../services/api'

export default function Sign() {
  const users = useSelector(state => state.users)

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const { data } = await api.post('/register', {
        email: users.email,
        password: users.password,
        course: users.course,
        access: 'client'
      })

      /**
       * Verifica se a request retorna um id
       */
      if (data.id) return alert('Conta criada com sucesso!')
      /** */
    } catch (e) {
      return console.log(e.response.status)
    }
  }

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
        action={handleSubmit}
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
