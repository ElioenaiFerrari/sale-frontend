/**
 * Ao logar
 */
export const onSignedIn = async token =>
  await window.localStorage.setItem('AUTH_TOKEN', token);
/**
 * Ao sair
 */
export const onSignedOut = async () =>
  await window.localStorage.removeItem('AUTH_TOKEN');
/**
 * Pegar token
 */
export const getToken = async () => {
  const token = await window.localStorage.getItem('AUTH_TOKEN');

  return `Bearer ${token}`;
};
/**
 * Verificar se está logado ou não
 */
export const isSigned = () => {
  const token = window.localStorage.getItem('AUTH_TOKEN');

  return token !== null ? true : false;
};
