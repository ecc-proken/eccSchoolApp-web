import axios from 'axios';
import { useQuery } from 'react-query';
import userDataState from 'globalState/userDataState';
import { useRecoilValue } from 'recoil';

type Timetable = {
  date: string;
  weekday: string;
  timetable: {
    [key: number]: string;
  };
};

const { userId, password } = useRecoilValue(userDataState);

/**
 * 時間割の情報を取得します。
 * @date 2022-02-24
 * @returns {Promise}
 */
const getTimetable = async () => {
  const { data } = await axios.post<Timetable[]>(
    'http://localhost:8000/api/timetable',
    {
      userId,
      password,
    },
  );
  return data;
};

const useGetTimetable = () => useQuery('timetable', getTimetable);
export default useGetTimetable;
