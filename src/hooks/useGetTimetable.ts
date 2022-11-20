import User from 'types/user';
import { useQuery } from 'react-query';
import axios from 'axios';
import userAtom from 'atom/userAtom';
import { useRecoilValue } from 'recoil';
import Timetable from 'types/timetable';

const getTimetable = async (userValue: User) => {
  const timetableData: Timetable[] = await Promise.all(
    [...new Array(5)]
      .map((_, i) => i + 1)
      .map(async (number) => {
        const { data } = await axios.post<Timetable>(
          `${process.env.REACT_APP_API_URL}/timetable/${number}`,
          userValue,
        );
        return data;
      }),
  );
  return timetableData;
};

const useGetTimetable = () => {
  const userValue = useRecoilValue(userAtom);
  const queryFn = () => getTimetable(userValue);
  return useQuery<Timetable[]>({
    queryKey: 'timetable',
    queryFn,
    cacheTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

export default useGetTimetable;
