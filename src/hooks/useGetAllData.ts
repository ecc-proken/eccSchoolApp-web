import useGetEvents from 'hooks/useGetEvents';
import useGetTimetable from 'hooks/useGetTimetable';
import useGetAttendance from 'hooks/useGetAttendance';
import useGetNews from 'hooks/useGetNews';

const useGetAllData = () => {
  useGetTimetable();
  useGetAttendance();
  useGetNews();
  const currentDate = new Date();
  useGetEvents({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
  });
  currentDate.setMonth(currentDate.getMonth() + 1);
  useGetEvents({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
  });
  currentDate.setMonth(currentDate.getMonth() + 1);
  useGetEvents({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() - 2,
  });
};

export default useGetAllData;
