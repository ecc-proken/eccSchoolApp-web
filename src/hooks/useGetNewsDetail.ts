import User from 'types/user';
import userAtom from 'atom/userAtom';
import { useRecoilValue } from 'recoil';
import { NewsDetail } from 'types/news';
import { fetchWithToken } from 'libs/fetchInstance';

const getNewsDetail = async (userValue: User, newsId: string) => {
  const {
    data: [data],
  } = await fetchWithToken(userValue).get<NewsDetail[]>(`/news/${newsId}`);

  return data;
};

const useGetNewsDetail = (newsId: string) => {
  const userValue = useRecoilValue(userAtom);
  return getNewsDetail(userValue, newsId);
};

export default useGetNewsDetail;
