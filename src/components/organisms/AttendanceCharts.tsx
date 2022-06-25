import LoadingSpiner from 'components/atoms/LoadingSpiner';
import useGetAttendance from 'hooks/useGetAttendance';
import { useRef, VFC } from 'react';
import { useQueryClient } from 'react-query';
import Attendance from 'types/attendance';
import Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more.js';
import solidGauge from 'highcharts/modules/solid-gauge.js';
import HighchartsReact from 'highcharts-react-official';

highchartsMore(Highcharts);
solidGauge(Highcharts);

const options = (
  series: {
    name: string;
    data: number[];
  }[],
) => ({
  chart: {
    type: 'column',
    height: '450px',
  },
  title: {
    text: '出席状況',
    style: {
      fontSize: '1rem',
    },
  },
  tooltip: {
    borderWidth: 0,
    backgroundColor: 'none',
    shadow: false,
    style: {
      fontSize: '0.8rem',
    },
    valueSuffix: '%',
    pointFormat:
      '<span style="font-size:1.5rem; font-weight: bold">{point.y}</span>',
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    categories: series.map((s) => s.name),
    title: {
      margin: 0,
    },
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: '',
    },
  },
  plotOptions: {
    column: {
      depth: 250,
    },
  },
  series: [
    {
      name: 'Attendance',
      data: series.map(({ data }) => data),
    },
  ],
});

const AttendanceCharts: VFC<HighchartsReact.Props> = (props) => {
  const queryClient = useQueryClient();
  const cacheData = queryClient.getQueryData<Attendance[]>('attendance');
  const { data, isLoading } = useGetAttendance();
  const attendanceData = cacheData || data;

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const series = attendanceData?.map(({ title, rate }) => ({
    name: title,
    data: [Number(rate.slice(0, -1))],
  }));

  return (
    <>
      {isLoading && <LoadingSpiner />}
      {series === undefined ? (
        !isLoading && '出席率の取得に失敗しました'
      ) : (
        <HighchartsReact
          highcharts={Highcharts}
          options={options(series)}
          ref={chartComponentRef}
          {...props}
        />
      )}
    </>
  );
};

export default AttendanceCharts;
