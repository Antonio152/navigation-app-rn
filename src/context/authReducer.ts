import {IAuthState} from './types/Auth.types';
type TActionPayload =
  | {type: 'signIn'; payload: string}
  | {type: 'logout'; payload?: any}
  | {type: 'saveFavIcon'; payload: string};

export const authReducer = (
  state: IAuthState,
  {type, payload}: TActionPayload,
): IAuthState => {
  console.log(payload);
  switch (type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: payload,
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        favoriteIcon: '',
      };
    case 'saveFavIcon':
      return {
        ...state,
        favoriteIcon: payload,
      };

    default:
      return state;
  }
};
