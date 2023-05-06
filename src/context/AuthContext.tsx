import React, {createContext, useReducer} from 'react';
import {IChildrenProps} from '../shared/types/components.types';
import {IAuthState} from './types/Auth.types';
import {authReducer} from './authReducer';

//Initial state
export const authInitialState: IAuthState = {
  isLoggedIn: false,
  username: '',
  favoriteIcon: '',
};

//Context data and functions
export interface IAuthContextProps {
  authState: IAuthState;
  signIn: (nameUser: string) => void;
  logout: () => void;
  changeFavIcon: (namIcon: string) => void;
}

//Context app
export const AuthContext = createContext({} as IAuthContextProps);

//Provider
export const AuthProvider = ({children}: IChildrenProps) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = (nameUser: string) => {
    dispatch({type: 'signIn', payload: nameUser});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeFavIcon = (nameIcon: string) => {
    dispatch({type: 'saveFavIcon', payload: nameIcon});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        logout,
        signIn,
        changeFavIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
