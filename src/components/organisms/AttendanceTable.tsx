import LoadingSpiner from 'components/atoms/LoadingSpiner';
import useGetAttendance from 'hooks/useGetAttendance';
import { VFC } from 'react';
import { useQueryClient } from 'react-query';
import Attendance from 'types/attendance';

const AttendanceTable: VFC = () => {
  const queryClient = useQueryClient();
  const cacheData = queryClient.getQueryData<Attendance[]>('attendance');
  const { data, isLoading } = useGetAttendance();
  const attendanceData = cacheData || data;

  return (
    <>
      {isLoading && <LoadingSpiner />}
      {attendanceData === undefined ? (
        !isLoading && '出席率の取得に失敗しました'
      ) : (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left'>
            <thead className='text-xs text-white uppercase bg-accent'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  授業名
                </th>
                <th scope='col' className='text-right px-6 py-3'>
                  出席率
                </th>
                <th scope='col' className='text-right px-6 py-3'>
                  欠席回数
                </th>
                <th scope='col' className='text-right px-6 py-3'>
                  遅刻回数
                </th>
                <th scope='col' className='text-right px-6 py-3'>
                  出席回数
                </th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((attendance) => (
                <tr className='bg-white border-b'>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {attendance.title}
                  </th>
                  <td className='px-6 py-4 text-right'>{attendance.rate}</td>
                  <td className='px-6 py-4 text-right'>
                    {attendance.absence}回
                  </td>
                  <td className='px-6 py-4 text-right'>
                    {attendance.lateness}回
                  </td>
                  <td className='px-6 py-4 text-right'>{attendance.count}回</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AttendanceTable;
