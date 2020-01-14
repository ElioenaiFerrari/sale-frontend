import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { Card } from '../../components';
import api from '../../services/api';
import { getToken } from '../../services/auth';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function loadFeed() {
      const { data } = await api.get('/posts', {
        headers: { Authorization: await getToken() }
      });

      console.log(data);

      setFeed(data);
    }
    loadFeed();
  }, []);
  return (
    <Container>
      <Card feed={feed} />
    </Container>
  );
}
