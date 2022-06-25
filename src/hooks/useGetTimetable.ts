import UserData from 'types/userInfo';
import { useQuery } from 'react-query';
import axios from 'axios';
import userDataState from 'globalState/userDataState';
import { useRecoilValue } from 'recoil';
import Timetable from 'types/timetable';

const getTimetable = async (userData: UserData) => {
  const timetableData: Timetable[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const num of [...new Array(5)].map((_, i) => i + 1)) {
    const { data } = await axios.post<Timetable>(
      `${process.env.REACT_APP_API_URL}/timetable/${num}`,
      userData,
    );
    timetableData.push(data);
  }
  return timetableData;
};

const useGetTimetable = () => {
  const userData = useRecoilValue(userDataState);
  const queryFn = () => getTimetable(userData);
  return useQuery<Timetable[]>({
    queryKey: 'timetable',
    queryFn,
    cacheTime: 30000,
    staleTime: 30000,
  });
};

export default useGetTimetable;
