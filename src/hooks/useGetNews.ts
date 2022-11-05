import UserData from 'types/userInfo';
import { useQuery } from 'react-query';
import axios from 'axios';
import userDataState from 'globalState/userDataState';
import { useRecoilValue } from 'recoil';
import News, { NewsDetail } from 'types/news';

const getNews = async (userData: UserData) => {
  const { data } = await axios.post<News[]>(
    `${process.env.REACT_APP_API_URL}/news`,
    userData,
  );
  return data;
};

const getNewsDetail = async (userData: UserData, newsId: string) => {
  const { data } = await axios.post<NewsDetail>(
    `${process.env.REACT_APP_API_URL}/news/${newsId}`,
    userData,
  );
  return data;
};

const useGetNews = () => {
  const userData = useRecoilValue(userDataState);
  const queryFn = () => getNews(userData);
  return useQuery<News[]>({
    queryKey: 'news',
    queryFn,
    cacheTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

export const useGetNewsDetail = (newsId: string) => {
  const userData = useRecoilValue(userDataState);
  return getNewsDetail(userData, newsId);
};

export default useGetNews;
