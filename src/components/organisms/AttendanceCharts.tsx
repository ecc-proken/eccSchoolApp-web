import LoadingSpiner from 'components/atoms/LoadingSpiner';
import useGetAttendance from 'hooks/useGetAttendance';
import { VFC } from 'react';
import { useQueryClient } from 'react-query';
import Attendance from 'types/attendance';

const AttendanceCharts: VFC = () => {
  const queryClient = useQueryClient();
  const cacheData = queryClient.getQueryData<Attendance[]>('attendance');
  const { data, isLoading } = useGetAttendance();
  const attendanceData = cacheData || data;
  // eslint-disable-next-line no-console
  console.log(attendanceData);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{isLoading && <LoadingSpiner />}</>;
};

export default AttendanceCharts;
