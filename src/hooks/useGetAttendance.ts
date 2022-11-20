import { useQuery } from 'react-query';
import axios from 'axios';
import userAtom from 'atom/userAtom';
import { useRecoilValue } from 'recoil';
import Attendance from 'types/attendance';
import User from 'types/user';

const getAttendance = async (userValue: User) => {
  const { data } = await axios.post<Attendance[]>(
    `${process.env.REACT_APP_API_URL}/attendance`,
    userValue,
  );
  return data.map((a) => ({ ...a, title: a.title.replace('?', '') }));
};

const useGetAttendance = () => {
  const userValue = useRecoilValue(userAtom);
  const queryFn = () => getAttendance(userValue);
  return useQuery<Attendance[]>({
    queryKey: 'attendance',
    queryFn,
    cacheTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

export default useGetAttendance;
