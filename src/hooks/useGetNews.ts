import Token from 'types/userInfo';
import { useQuery } from 'react-query';
import axios from 'axios';
import tokenAtom from 'atom/tokenAtom';
import { useRecoilValue } from 'recoil';
import News, { NewsDetail } from 'types/news';

const getNews = async (token: Token) => {
  const { data } = await axios.post<News[]>(
    `${process.env.REACT_APP_API_URL}/news`,
    token,
  );
  return data;
};

const getNewsDetail = async (token: Token, newsId: string) => {
  const { data } = await axios.post<NewsDetail>(
    `${process.env.REACT_APP_API_URL}/news/${newsId}`,
    token,
  );
  return data;
};

const useGetNews = () => {
  const token = useRecoilValue(tokenAtom);
  const queryFn = () => getNews(token);
  return useQuery<News[]>({
    queryKey: 'news',
    queryFn,
    cacheTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

export const useGetNewsDetail = (newsId: string) => {
  const token = useRecoilValue(tokenAtom);
  return getNewsDetail(token, newsId);
};

export default useGetNews;
