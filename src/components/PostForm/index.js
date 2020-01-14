import React from 'react';
import { Container } from './styles';
import { Input, Button } from '../index';
import { darkColor, lightColor } from '../../colors';
import { addTitle, addImageURL, addDescription } from '../../actions/posts';
import api from '../../services/api';
import { useSelector } from 'react-redux';
import { getToken } from '../../services/auth';

export default function PostForm() {
  const posts = useSelector(state => state.posts);

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const { data } = await api.post(
        '/posts',
        {
          title: posts.title,
          image_url: posts.image_url,
          description: posts.description
        },
        { headers: { Authorization: await getToken() } }
      );

      return alert('Post criado com sucesso');
    } catch (error) {
      if (error.response.status === 401) {
        return alert('Você não tem permissão para isso!');
      }
    }
  }

  return (
    <Container>
      <Input
        action={addTitle}
        style={{
          width: '200px',
          color: '#777'
        }}
        placeholder="Titulo"
      />
      <Input
        action={addImageURL}
        style={{
          width: '200px',
          color: '#777',
          background: 'rgba(0, 0, 0, 0.1)',
          color: 'black'
        }}
        placeholder="Url da imagem"
      />
      <Input
        action={addDescription}
        style={{
          width: '200px',
          color: '#777'
        }}
        placeholder="Descrição"
      />
      <Button
        action={handleSubmit}
        style={{
          background: `linear-gradient(90deg, ${darkColor}, ${lightColor})`,
          color: '#FFF',
          marginTop: '20px'
        }}
        text="Postar evento"
        type="submit"
      />
    </Container>
  );
}
