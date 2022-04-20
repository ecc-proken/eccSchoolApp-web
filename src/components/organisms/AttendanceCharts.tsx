import LoadingSpiner from 'components/atoms/LoadingSpiner';
import useGetAttendance from 'hooks/useGetAttendance';
import { useEffect, useRef, useState, VFC } from 'react';
import { useQueryClient } from 'react-query';
import Attendance from 'types/attendance';
import Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more.js';
import solidGauge from 'highcharts/modules/solid-gauge.js';
import HighchartsReact from 'highcharts-react-official';

highchartsMore(Highcharts);
solidGauge(Highcharts);

const options = {
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
  series: [
    {
      name: 'Move',
      data: [
        {
          color: '#834838',
          radius: '100%',
          innerRadius: '82%',
          y: 80,
        },
      ],
    },
    {
      name: 'Exercise',
      data: [
        {
          color: '#834838',
          radius: '80%',
          innerRadius: '62%',
          y: 65,
        },
      ],
    },
    {
      name: 'Stand',
      data: [
        {
          color: '#834838',
          radius: '60%',
          innerRadius: '42%',
          y: 50,
        },
      ],
    },
  ],
};

const AttendanceCharts: VFC<HighchartsReact.Props> = (props) => {
  const [screenHeight, setScreenHeight] = useState(0);
  const queryClient = useQueryClient();
  const cacheData = queryClient.getQueryData<Attendance[]>('attendance');
  const { data, isLoading } = useGetAttendance();
  const attendanceData = cacheData || data;

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  // eslint-disable-next-line no-console
  console.log(screenHeight, attendanceData);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  return (
    <>
      {isLoading && <LoadingSpiner />}
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
      {/* <ResponsiveContainer width='100%' height={screenHeight}>
        <RadarChart
          outerRadius={100}
          // width={500}
          // height={500}
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
      </ResponsiveContainer> */}
    </>
  );
};

export default AttendanceCharts;
