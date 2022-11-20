import User from 'types/user';
import { useQuery } from 'react-query';
import userAtom from 'atom/userAtom';
import { useRecoilValue } from 'recoil';
import Timetable from 'types/timetable';
import { fetchWithToken } from 'libs/fetchInstance';

const getTimetable = async (userValue: User) => {
  const timetableData: Timetable[] = await Promise.all(
    [...new Array(5)]
      .map((_, i) => i + 1)
      .map(async (number) => {
        const { data } = await fetchWithToken(userValue).get<Timetable>(
          `/timetable/${number}`,
        );
        return {
          ...data,
          timetable: data.timetable.map((subject) => ({
            ...subject,
            period: subject.period.slice(0, 1),
            subjectTitle: subject.subjectTitle.slice(5),
          })),
        };
      }),
  );
  return timetableData;
};

const useGetTimetable = () => {
  const userValue = useRecoilValue(userAtom);
  const queryFn = () => getTimetable(userValue);
  return useQuery<Timetable[]>({
    queryKey: 'timetable',
    queryFn,
    cacheTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

export default useGetTimetable;
