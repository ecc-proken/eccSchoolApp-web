import Token from 'types/userInfo';
import { useQuery } from 'react-query';
import axios from 'axios';
import tokenAtom from 'atom/tokenAtom';
import { useRecoilValue } from 'recoil';
import Timetable from 'types/timetable';

const getTimetable = async (token: Token) => {
  const timetableData: Timetable[] = await Promise.all(
    [...new Array(5)]
      .map((_, i) => i + 1)
      .map(async (number) => {
        const { data } = await axios.post<Timetable>(
          `${process.env.REACT_APP_API_URL}/timetable/${number}`,
          token,
        );
        return data;
      }),
  );
  return timetableData;
};

const useGetTimetable = () => {
  const token = useRecoilValue(tokenAtom);
  const queryFn = () => getTimetable(token);
  return useQuery<Timetable[]>({
    queryKey: 'timetable',
    queryFn,
    cacheTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

export default useGetTimetable;
