import { atom } from 'recoil';
import UserData from 'types/userData';

const userDataState = atom<UserData>({
  key: 'userDataState',
  default: {
    userId: null,
    password: null,
  },
});
export default userDataState;
