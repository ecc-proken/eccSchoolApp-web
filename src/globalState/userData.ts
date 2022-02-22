import { atom } from 'recoil';

export const UserData = atom({
  key: 'UserData',
  default: {
    userId: '',
    password: '',
  },
});
