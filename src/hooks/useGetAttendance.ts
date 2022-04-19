import { UserData } from 'types/userData';
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
  return data;
};

const useGetAttendance = () => {
  const userData = useRecoilValue(userDataState);
  const queryFn = () => getAttendance(userData);
  return useQuery<Attendance[]>({
    queryKey: 'attendance',
    queryFn,
    cacheTime: 30000,
    staleTime: 30000,
  });
};

export default useGetAttendance;
