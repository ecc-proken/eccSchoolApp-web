import LoadingSpiner from 'components/atoms/LoadingSpiner';
import useGetAttendance from 'hooks/useGetAttendance';
import { useEffect, useRef, useState, VFC } from 'react';
import { useQueryClient } from 'react-query';
import Attendance from 'types/attendance';
import Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more.js';
import solidGauge from 'highcharts/modules/solid-gauge.js';
import HighchartsReact from 'highcharts-react-official';
import colors from 'theme/colors';

highchartsMore(Highcharts);
solidGauge(Highcharts);

const options = (
  series: {
    name: string;
    data: {
      color: string;
      radius: string;
      innerRadius: string;
      y: number;
    }[];
  }[],
) => ({
  chart: {
    type: 'solidgauge',
    height: '110%',
  },
  title: {
    text: 'Attendance',
    style: {
      fontSize: '24px',
    },
  },
  tooltip: {
    borderWidth: 0,
    backgroundColor: 'none',
    shadow: false,
    style: {
      fontSize: '16px',
    },
    valueSuffix: '%',
    pointFormat:
      '<p style="padding-top:20px">{series.name}</p><br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
    positioner: () => ({ x: 30, y: 30 }),
  },
  pane: {
    startAngle: 0,
    endAngle: 360,
    background: {
      backgroundColor: '#ffffff',
      borderWidth: 0,
    },
  },
  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 0,
    tickPositions: [],
  },
  plotOptions: {
    solidgauge: {
      dataLabels: {
        enabled: false,
      },
      linecap: 'round',
      stickyTracking: false,
      rounded: true,
    },
  },
  series,
});

const AttendanceCharts: VFC<HighchartsReact.Props> = (props) => {
  const [screenHeight, setScreenHeight] = useState(0);
  const queryClient = useQueryClient();
  const cacheData = queryClient.getQueryData<Attendance[]>('attendance');
  const { data, isLoading } = useGetAttendance();
  const attendanceData = cacheData || data;

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const series = attendanceData?.map(({ title, rate }, index) => ({
    name: title,
    data: [
      {
        color: colors[index],
        radius: `${(90 / attendanceData.length) * index + 10}%`,
        innerRadius: `${(90 / attendanceData.length) * index + 10 + 10}%`,
        y: Number(rate.slice(0, -1)),
      },
    ],
  }));

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  return (
    <>
      {isLoading && <LoadingSpiner />}
      {series === undefined ? (
        '出席率の取得に失敗しました'
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
