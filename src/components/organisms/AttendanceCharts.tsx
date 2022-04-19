import LoadingSpiner from 'components/atoms/LoadingSpiner';
import useGetAttendance from 'hooks/useGetAttendance';
import { VFC } from 'react';
import { useQueryClient } from 'react-query';
import Attendance from 'types/attendance';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

const AttendanceCharts: VFC = () => {
  const queryClient = useQueryClient();
  const cacheData = queryClient.getQueryData<Attendance[]>('attendance');
  const { data, isLoading } = useGetAttendance();
  const attendanceData = cacheData || data;

  return (
    <>
      {isLoading && <LoadingSpiner />}
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={attendanceData?.map((d) => ({
          title: d.title,
          rate: Number(d.rate.slice(0, -1)),
        }))}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey='title' />
        <PolarRadiusAxis />
        <Radar
          dataKey='rate'
          stroke='#8884d8'
          fill='#8884d8'
          fillOpacity={0.6}
        />
      </RadarChart>
    </>
  );
};

export default AttendanceCharts;
