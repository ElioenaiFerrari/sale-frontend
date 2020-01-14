import React from 'react';

import { Container } from './styles';
import Button from '../Button';
import { darkColor } from '../../colors';
import { onSignedOut, isSigned } from '../../services/auth';
import {
  MdFeedback,
  MdExitToApp,
  MdRemoveRedEye,
  MdLocalPostOffice,
  MdAirportShuttle,
  MdFavoriteBorder,
  MdPerson,
  MdPersonAdd,
  MdPersonOutline,
  MdArrowUpward,
  MdViewAgenda
} from 'react-icons/md';

export default function Header() {
  async function handleLogout(event) {
    event.preventDefault();

    onSignedOut();

    return (window.location.href = '/');
  }

  return (
    <Container>
      <h1>Sale</h1>
      {isSigned() && (
        <div id="buttons">
          <Button
            action={() => (window.location.href = '/posts')}
            style={{
              color: darkColor,
              width: '200px',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
              margin: '0 10px'
            }}
            title="Postar evento"
            text={<MdArrowUpward size={30} />}
            type="submit"
          />
          <Button
            action={() => (window.location.href = '/feed')}
            style={{
              color: darkColor,
              width: '200px',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
              margin: '0 10px'
            }}
            title="Feed"
            text={<MdViewAgenda size={30} />}
            type="submit"
          />
          <Button
            action={handleLogout}
            style={{
              color: darkColor,
              width: '200px',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)'
            }}
            title="Sair"
            text={<MdExitToApp size={30} />}
            type="submit"
          />
        </div>
      )}
    </Container>
  );
}
