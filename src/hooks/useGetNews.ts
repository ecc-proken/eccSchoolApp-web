import User from 'types/user';
import { useQuery } from 'react-query';
import axios from 'axios';
import userAtom from 'atom/userAtom';
import { useRecoilValue } from 'recoil';
import News from 'types/news';

const getNews = async (userValue: User) => {
  const { data } = await axios.post<News[]>(
    `${process.env.REACT_APP_API_URL}/news`,
    userValue,
  );
  return data;
};

const useGetNews = () => {
  const userValue = useRecoilValue(userAtom);
  const queryFn = () => getNews(userValue);
  return useQuery<News[]>({
    queryKey: 'news',
    queryFn,
    cacheTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

export default useGetNews;
