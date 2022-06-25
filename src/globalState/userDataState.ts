import { atom } from 'recoil';
import UserData from 'types/userInfo';

const userDataState = atom<UserData>({
  key: 'userDataState',
  default: {
    id: null,
    pw: null,
  },
});
export default userDataState;
