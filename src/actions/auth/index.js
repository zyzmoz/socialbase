import { api } from '../api';
import { CREATE_USER, SIGN_IN, LOGOUT } from './constants';


export const register = (userData) => {
  console.log(userData);
  return async (dispatch) => {
    const { email, username, password } = userData;
    const user = await api.post('/users', {
      email: email,
      username: username,
      password: password
    });
    console.log('res', user);

    dispatch({
      type: CREATE_USER
    });

  }
}

export const signIn = (email, password) => {
  return async (dispatch) => {
    const user = await api.post('/sessions', {
      email,
      password
    });
    localStorage.setItem('@socialbase:auth', user.data.token);
    dispatch({
      type: SIGN_IN,
      payload: { token: user.data.token }
    })
  }
}

export const logout = () => {
  localStorage.removeItem('@socialbase:auth');
  return async (dispatch) => {
    dispatch({
      type: LOGOUT
    });
  }
}
