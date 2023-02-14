import User from 'types/user';
import userAtom from 'atom/userAtom';
import { useRecoilValue, atomFamily, useRecoilState } from 'recoil';
import { NewsDetail } from 'types/news';
import { fetchWithToken } from 'libs/fetchInstance';

export const newsDetailAtom = atomFamily<null | NewsDetail, string>({
  key: 'newsDetail',
  default: null,
});

const getNewsDetail = async (userValue: User, newsId: string) => {
  const {
    data: [data],
  } = await fetchWithToken(userValue).get<NewsDetail[]>(`/news/${newsId}`);

  return data;
};

const useGetNewsDetail = (newsId: string) => {
  const userValue = useRecoilValue(userAtom);

  const [newsDetail, setNewsDetail] = useRecoilState(newsDetailAtom(newsId));

  if (newsDetail === null) {
    getNewsDetail(userValue, newsId).then((d) => {
      setNewsDetail(d);
    });
  }

  return newsDetail;
};

export default useGetNewsDetail;
