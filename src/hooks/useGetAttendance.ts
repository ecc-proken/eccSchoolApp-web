import Token from 'types/userInfo';
import { useQuery } from 'react-query';
import axios from 'axios';
import tokenAtom from 'atom/tokenAtom';
import { useRecoilValue } from 'recoil';
import Attendance from 'types/attendance';

const getAttendance = async (token: Token) => {
  const { data } = await axios.post<Attendance[]>(
    `${process.env.REACT_APP_API_URL}/attendance`,
    token,
  );
  return data.map((a) => ({ ...a, title: a.title.replace('?', '') }));
};

const useGetAttendance = () => {
  const token = useRecoilValue(tokenAtom);
  const queryFn = () => getAttendance(token);
  return useQuery<Attendance[]>({
    queryKey: 'attendance',
    queryFn,
    cacheTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

export default useGetAttendance;
