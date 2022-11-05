import UserData from 'types/userInfo';
import { useQuery } from 'react-query';
import axios from 'axios';
import userDataState from 'globalState/userDataState';
import { useRecoilValue } from 'recoil';
import Attendance from 'types/attendance';

const getAttendance = async (userData: UserData) => {
  const { data } = await axios.post<Attendance[]>(
    `${process.env.REACT_APP_API_URL}/attendance`,
    userData,
  );
  return data.map((a) => ({ ...a, title: a.title.replace('?', '') }));
};

const useGetAttendance = () => {
  const userData = useRecoilValue(userDataState);
  const queryFn = () => getAttendance(userData);
  return useQuery<Attendance[]>({
    queryKey: 'attendance',
    queryFn,
    cacheTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

export default useGetAttendance;
