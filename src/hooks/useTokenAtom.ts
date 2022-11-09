import tokenAtom from 'atom/tokenAtom';
import { useSetRecoilState } from 'recoil';

/**
 * atomとlocalstorageにデータを格納する関数を返します。
 * @date 2022-02-23
 * @returns {Function}
 */
const useTokenAtom = () => {
  const setToken = useSetRecoilState(tokenAtom);
  const setTokenHandler = (token: string) => {
    setToken({ token });
    localStorage.setItem('token', token);
  };
  return setTokenHandler;
};
export default useTokenAtom;
