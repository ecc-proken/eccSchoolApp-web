import UserData from 'types/userInfo';
import { useQuery } from 'react-query';
import axios from 'axios';
import userDataState from 'globalState/userDataState';
import { useRecoilValue } from 'recoil';
import News from 'types/news';

const getTimetable = async (userData: UserData) => {
  const { data } = await axios.post<News[]>(
    `${process.env.REACT_APP_API_URL}/news`,
    userData,
  );
  return data;
};

const useGetNews = () => {
  const userData = useRecoilValue(userDataState);
  const queryFn = () => getTimetable(userData);
  return useQuery<News[]>({
    queryKey: 'news',
    queryFn,
    cacheTime: 30000,
    staleTime: 30000,
  });
};

export default useGetNews;
