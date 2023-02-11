import User from 'types/user';
import userAtom from 'atom/userAtom';
import { useRecoilValue } from 'recoil';
import { NewsDetail } from 'types/news';
import { fetchWithToken } from 'libs/fetchInstance';
import { useQuery } from 'react-query';

const getNewsDetail = async (userValue: User, newsId: string) => {
  const {
    data: [data],
  } = await fetchWithToken(userValue).get<NewsDetail[]>(`/news/${newsId}`);

  return data;
};

const useGetNewsDetail = (newsId: string) => {
  const userValue = useRecoilValue(userAtom);

  const queryFn = () => getNewsDetail(userValue, newsId);
  return useQuery<NewsDetail>({
    queryKey: 'news-detail',
    queryFn,
    cacheTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

export default useGetNewsDetail;
