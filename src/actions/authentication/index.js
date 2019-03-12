import {
  SIGNIN,
  SIGNUP,
} from '../../constants/actionTypes'

export const signIn = ( user ) => ({
  type: SIGNIN,
  user
});

export const signUp = () => ({
  type: SIGNUP,
});