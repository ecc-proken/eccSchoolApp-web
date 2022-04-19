import useGetTimetable from 'hooks/useGetTimetable';
import useGetAttendance from 'hooks/useGetAttendance';

const useGetAllData = () => {
  useGetTimetable();
  useGetAttendance();
};

export default useGetAllData;
