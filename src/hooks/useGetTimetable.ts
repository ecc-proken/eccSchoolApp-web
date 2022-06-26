import UserData from 'types/userInfo';
import { useQuery } from 'react-query';
import axios from 'axios';
import userDataState from 'globalState/userDataState';
import { useRecoilValue } from 'recoil';
import Timetable from 'types/timetable';

const getTimetable = async (userData: UserData) => {
  const timetableData: Timetable[] = await Promise.all(
    [...new Array(5)]
      .map((_, i) => i + 1)
      .map(async (number) => {
        const { data } = await axios.post<Timetable>(
          `${process.env.REACT_APP_API_URL}/timetable/${number}`,
          userData,
        );
        return data;
      }),
  );
  return timetableData;
};

const useGetTimetable = () => {
  const userData = useRecoilValue(userDataState);
  const queryFn = () => getTimetable(userData);
  return useQuery<Timetable[]>({
    queryKey: 'timetable',
    queryFn,
    cacheTime: 10000000,
    staleTime: 10000000,
  });
};

export default useGetTimetable;
