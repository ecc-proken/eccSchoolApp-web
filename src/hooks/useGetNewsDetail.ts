import User from 'types/user';
import axios from 'axios';
import userAtom from 'atom/userAtom';
import { useRecoilValue } from 'recoil';
import { NewsDetail } from 'types/news';

const getNewsDetail = async (userValue: User, newsId: string) => {
  const { data } = await axios.post<NewsDetail>(
    `${process.env.REACT_APP_API_URL}/news/${newsId}`,
    userValue,
  );
  return data;
};
const useGetNewsDetail = (newsId: string) => {
  const userValue = useRecoilValue(userAtom);
  return getNewsDetail(userValue, newsId);
};

export default useGetNewsDetail;
