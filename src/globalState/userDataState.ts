import { atom } from 'recoil';

const userDataState = atom({
  key: 'userDataState',
  default: {
    userId: '',
    password: '',
  },
});
export default userDataState;
