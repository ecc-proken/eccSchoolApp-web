import userDataState from 'globalState/userDataState';
import { useSetRecoilState } from 'recoil';

/**
 * atomとlocalstorageにデータを格納する関数を返します。
 * @date 2022-02-23
 * @returns {Function}
 */
const useUserDataState = () => {
  const setUserData = useSetRecoilState(userDataState);
  /**
   * ユーザーデータを受け取り、atomとlocalstorageに格納します。
   * @date 2022-02-23
   * @param {string} id
   * @param {string}  pw
   * @returns {void}
   */
  const setUserDataHandler = (id: string, pw: string) => {
    setUserData({ id, pw });
    localStorage.setItem('id', id);
    localStorage.setItem('pw', pw);
  };
  return setUserDataHandler;
};
export default useUserDataState;
