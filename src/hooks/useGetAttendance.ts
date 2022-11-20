import { useQuery } from 'react-query';
import userAtom from 'atom/userAtom';
import { useRecoilValue } from 'recoil';
import Attendance from 'types/attendance';
import User from 'types/user';
import { fetchWithToken } from 'libs/fetchInstance';

const getAttendance = async (userValue: User) => {
  const { data } = await fetchWithToken(userValue).get<Attendance[]>(
    '/attendance',
  );
  return data;
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
