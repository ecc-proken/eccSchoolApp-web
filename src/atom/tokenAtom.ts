import { atom } from 'recoil';
import Token from 'types/userInfo';

const tokenAtom = atom<Token>({
  key: 'tokenAtom',
  default: {
    token: null,
  },
});
export default tokenAtom;
