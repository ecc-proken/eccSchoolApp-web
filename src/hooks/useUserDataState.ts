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
   * @param {string} userId
   * @param {string}  password
   * @returns {void}
   */
  const setUserDataHandler = (userId: string, password: string) => {
    setUserData({ userId, password });
    localStorage.setItem('userId', userId);
    localStorage.setItem('password', password);
  };
  return setUserDataHandler;
};
export default useUserDataState;
