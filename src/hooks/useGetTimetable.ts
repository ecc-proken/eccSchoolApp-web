import { UserData } from 'types/userData';
import { useQuery } from 'react-query';
import axios from 'axios';
import userDataState from 'globalState/userDataState';
import { useRecoilValue } from 'recoil';
import Timetable from 'types/timetable';

const getTimetable = async (userData: UserData) => {
  const { data } = await axios.post<Timetable[]>(
    'http://localhost:8000/api/timetable',
    userData,
  );
  return data;
};

const useTimetable = () => {
  const userData = useRecoilValue(userDataState);
  return useQuery(['timetable', userData], () => getTimetable(userData));
};

export default useTimetable;
