import { atom } from 'recoil';
import User from 'types/user';

const userAtom = atom<User>({
  key: 'userAtom',
  default: {},
});
export default userAtom;
