import UserData from 'types/userData';
import { useQuery } from 'react-query';
import axios from 'axios';
import userDataState from 'globalState/userDataState';
import { useRecoilValue } from 'recoil';
import Timetable from 'types/timetable';

const getTimetable = async (userData: UserData) => {
  const { data } = await axios.post<Timetable[]>(
    `${process.env.REACT_APP_API_URL}/timetable`,
    userData,
  );
  return data;
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
