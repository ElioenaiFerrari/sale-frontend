import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import { Input, Button } from '../index';
import { lightColor, darkColor } from '../../colors';

import api from '../../services/api';
import { addEmail, addPassword } from '../../actions/users';
import { onSignedIn } from '../../services/auth';

export default function Login() {
  const users = useSelector(state => state.users);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (users.email && users.password) {
        const { data } = await api.post('/auth', {
          email: users.email,
          password: users.password
        });

        if (data) {
          onSignedIn(data);
          return (window.location.href = '/posts');
        }
        /**
         * Salvar token
         * */
        return alert('Email ou senha incorretos!');
      } else {
        alert('Por favor, preencha todos os dados!');
      }
    } catch (e) {
      alert('Dados incorretos!');
    }
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
        action={handleSubmit}
        style={{
          background: `linear-gradient(90deg, ${darkColor}, ${lightColor})`,
          color: '#FFF',
          marginTop: '20px'
        }}
        text="Entrar"
        type="submit"
      />
    </Container>
  );
}
