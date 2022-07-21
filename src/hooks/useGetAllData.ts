// import { useGetEvents } from 'hooks/useGetEvents';
import useGetTimetable from 'hooks/useGetTimetable';
import useGetAttendance from 'hooks/useGetAttendance';
import useGetNews from 'hooks/useGetNews';

const useGetAllData = () => {
  useGetTimetable();
  useGetAttendance();
  useGetNews();
  // useGetEvents();
};

export default useGetAllData;
