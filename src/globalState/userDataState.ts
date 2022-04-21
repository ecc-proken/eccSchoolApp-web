import { atom } from 'recoil';
import UserData from 'types/userInfo';

const userDataState = atom<UserData>({
  key: 'userDataState',
  default: {
    userId: null,
    password: null,
  },
});
export default userDataState;
