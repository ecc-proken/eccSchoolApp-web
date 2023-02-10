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
        <div className='relative overflow-x-auto shadow-sm sm:rounded-lg'>
          <table className='w-full text-sm text-left'>
            <thead className='text-sm text-white uppercase bg-accent'>
              <tr>
                <th
                  scope='col'
                  className='px-3 py-3 xl:px-6 xl:py-3 whitespace-nowrap font-normal'
                >
                  授業名
                </th>
                <th
                  scope='col'
                  className='text-right px-3 py-3 xl:px-6 xl:py-3 whitespace-nowrap font-normal'
                >
                  出席率
                </th>
                <th
                  scope='col'
                  className='text-right px-3 py-3 xl:px-6 xl:py-3 whitespace-nowrap font-normal'
                >
                  欠席回数
                </th>
                <th
                  scope='col'
                  className='text-right px-3 py-3 xl:px-6 xl:py-3 whitespace-nowrap font-normal'
                >
                  遅刻回数
                </th>
                <th
                  scope='col'
                  className='text-right px-3 py-3 xl:px-6 xl:py-3 whitespace-nowrap font-normal'
                >
                  出席回数
                </th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((attendance, key) => (
                <tr
                  className={`border-b ${
                    key % 2 === 0 ? 'bg-white' : 'bg-sky-100'
                  }`}
                >
                  <th
                    scope='row'
                    className='px-3 py-3 xl:px-6 xl:py-4 font-medium whitespace-nowrap'
                  >
                    {attendance.title}
                  </th>
                  <td className='px-3 py-3 xl:px-6 xl:py-4 text-right whitespace-nowrap'>
                    {attendance.rate}
                  </td>
                  <td className='px-3 py-3 xl:px-6 xl:py-4 text-right whitespace-nowrap'>
                    {attendance.absence}回
                  </td>
                  <td className='px-3 py-3 xl:px-6 xl:py-4 text-right whitespace-nowrap'>
                    {attendance.lateness}回
                  </td>
                  <td className='px-3 py-3 xl:px-6 xl:py-4 text-right whitespace-nowrap'>
                    {attendance.count}回
                  </td>
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
