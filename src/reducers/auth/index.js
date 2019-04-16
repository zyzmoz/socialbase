import { createReducer } from "../createReducers";
import { CREATE_USER, SIGN_IN, LOGOUT } from "../../actions/auth/constants";


const initialState = {};

export const register = (state, payload) => {
  
  return { ...state }
}

export const signIn = (state, payload) => {
  const auth = Object.assign({}, {token: payload.token})
  return { ...state, ...auth }
}

export const logout = (state, payload) => {
  let { auth }= state;
  auth = {...auth, token: null};
  return {...state, ...auth };
}


export default createReducer(initialState,{
  [CREATE_USER]: register,
  [SIGN_IN]: signIn,
  [LOGOUT]:logout

})