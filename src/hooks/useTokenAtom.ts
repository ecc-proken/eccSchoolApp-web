import userAtom from 'atom/userAtom';
import { useSetRecoilState } from 'recoil';
import User from 'types/user';

/**
 * atomとlocalstorageにデータを格納する関数を返します。
 * @date 2022-02-23
 * @returns {Function}
 */
const useTokenAtom = () => {
  const setUser = useSetRecoilState(userAtom);
  const setTokenHandler = ({ token, uuid }: User) => {
    if (!token || !uuid) throw new Error('token or uuid is not defined');
    setUser({ token, uuid });
    localStorage.setItem('token', token);
    localStorage.setItem('uuid', uuid);
  };
  return setTokenHandler;
};
export default useTokenAtom;
