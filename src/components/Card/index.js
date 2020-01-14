import React from 'react';

import { Container } from './styles';

export default function Card(props) {
  return (
    <Container>
      {props.feed.map(item => (
        <div class="card">
          <h2 class="title">{item.title}</h2>
          <img src={item.image_url} />
          <p class="description">{item.description}</p>
        </div>
      ))}
    </Container>
  );
}
