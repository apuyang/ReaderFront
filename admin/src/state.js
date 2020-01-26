import { createGlobalState } from 'react-hooks-global-state';
import cookie from 'js-cookie';

const userLS = getLSItem('user');
const initialState = {
  theme: getLSItem('theme') || 'light',
  language: 'es',
  user: userLS
};

const {
  GlobalStateProvider,
  setGlobalState,
  useGlobalState
} = createGlobalState(initialState);

export const setTheme = theme => {
  window.localStorage.setItem('theme', theme);
  setGlobalState('theme', theme);
};

export const setLanguage = language => {
  window.localStorage.setItem('rf_language', language);
  setGlobalState('language', language);
};

export const setUser = (user, token) => {
  if (user) {
    // Update token
    setLSItem('token', token);
    setLSItem('user', user);

    // Set cookie for SSR
    cookie.set('auth', { token, user }, { path: '/' });

    setGlobalState('user', user);
  } else {
    // Remove user
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    cookie.remove('auth');
    setGlobalState('user', null);
  }
};

function setLSItem(name, object) {
  try {
    if (typeof object === 'string') {
      window.localStorage.setItem(name, object);
    } else {
      window.localStorage.setItem(name, JSON.stringify(object));
    }
  } catch (err) {
    console.error(err);
  }
}

function getLSItem(name) {
  try {
    const item = window.localStorage.getItem(name);
    return JSON.parse(item);
  } catch (err) {
    return null;
  }
}

export { GlobalStateProvider, useGlobalState };