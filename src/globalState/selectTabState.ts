import { tabName } from 'types/tabList';

import { atom } from 'recoil';

const selectTabState = atom<tabName>({
  key: 'selectTabState',
  default: 'ホーム',
});
export default selectTabState;
