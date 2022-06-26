import LoadingSpiner from 'components/atoms/LoadingSpiner';
import TableData from 'components/atoms/TableData';
import useGetAttendance from 'hooks/useGetAttendance';
import useGetTimetable from 'hooks/useGetTimetable';
import { useState, VFC } from 'react';
import { useQueryClient } from 'react-query';
import Attendance from 'types/attendance';
import Timetable from 'types/timetable';

const Table: VFC = () => {
  const [isAttendanceMode, setIsAttendanceMode] = useState(false);

  const attendanceModeHandler = () => {
    setIsAttendanceMode((prev) => !prev);
  };

  const queryClient = useQueryClient();
  const cacheData = queryClient.getQueryData<Timetable[]>('timetable');
  const { data, isLoading } = useGetTimetable();
  const timetableData = cacheData || data;

  const attendanceCacheData =
    queryClient.getQueryData<Attendance[]>('attendance');
  const fetchAttendanceData = useGetAttendance();
  const attendanceData = attendanceCacheData || fetchAttendanceData.data;

  const date = new Date();
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  /**
   * データとコマ目を受け取り、TableDataコンポーネントを返す
   * @date 2022-02-26
   * @param {Timetable} tableData
   * @param {number} periodNumber
   * @returns {HTMLTableDataCellElement}
   */
  const tableDataTagCreate = (
    { timetable, weekday }: Timetable,
    periodNumber: number,
  ) => {
    // 曜日が一致したら背景を変更する
    const selected = weekday === weekdays[date.getDay()];

    if (timetable[periodNumber])
      return (
        <TableData
          key={weekday}
          selected={selected}
          tableData={timetable[periodNumber]}
          rate={
            isAttendanceMode
              ? attendanceData?.find(
                  (attendance) =>
                    timetable[periodNumber].subjectTitle === attendance.title,
                )?.rate
              : undefined
          }
        />
      );
    return <TableData key={weekday} selected={selected} />;
  };

  return (
    <>
      {isLoading && <LoadingSpiner />}

      <table className='min-w-full text-center h-[94%]'>
        <thead className='border bg-accent'>
          <tr>
            <th className='w-1/6 text-sm md:text-base font-bold text-white px-3 py-2 md:px-6 md:py-4'>
              #
            </th>
            <th className='w-1/6 text-sm md:text-base font-bold text-white px-3 py-2 md:px-6 md:py-4'>
              月
            </th>
            <th className='w-1/6 text-sm md:text-base font-bold text-white px-3 py-2 md:px-6 md:py-4'>
              火
            </th>
            <th className='w-1/6 text-sm md:text-base font-bold text-white px-3 py-2 md:px-6 md:py-4'>
              水
            </th>
            <th className='w-1/6 text-sm md:text-base font-bold text-white px-3 py-2 md:px-6 md:py-4'>
              木
            </th>
            <th className='w-1/6 text-sm md:text-base font-bold text-white px-3 py-2 md:px-6 md:py-4'>
              金
            </th>
          </tr>
        </thead>
        <tbody className='h-full'>
          <tr className='bg-white border-b'>
            <td className='text-[12px] md:text-[12px] xl:text-[14px] py-2 border-x text-gray-700'>
              1限
              <br />
              <span className='text-gray-400 text-[10px] md:text-[10px] xl:text-[12px] pt-1 inline-block'>
                09:15 ~ 10:45
              </span>
            </td>
            {timetableData?.map((timetable) =>
              tableDataTagCreate(timetable, 1),
            )}
          </tr>
          <tr className='bg-white border-b'>
            <td className='text-[12px] md:text-[12px] xl:text-[14px] py-2 border-x text-gray-700'>
              2限
              <br />
              <span className='text-gray-400 text-[10px] md:text-[10px] xl:text-[12px] pt-1 inline-block'>
                11:00 ~ 12:30
              </span>
            </td>
            {timetableData?.map((timetable) =>
              tableDataTagCreate(timetable, 2),
            )}
          </tr>
          <tr className='bg-white border-b'>
            <td className='text-[12px] md:text-[12px] xl:text-[14px] py-2 border-x text-gray-700'>
              3限
              <br />
              <span className='text-gray-400 text-[10px] md:text-[10px] xl:text-[12px] pt-1 inline-block'>
                13:30 ~ 15:00
              </span>
            </td>
            {timetableData?.map((timetable) =>
              tableDataTagCreate(timetable, 3),
            )}
          </tr>
          <tr className='bg-white border-b'>
            <td className='text-[12px] md:text-[12px] xl:text-[14px] py-2 border-x text-gray-700'>
              4限
              <br />
              <span className='text-gray-400 text-[10px] md:text-[10px] xl:text-[12px] pt-1 inline-block'>
                15:15 ~ 16:45
              </span>
            </td>
            {timetableData?.map((timetable) =>
              tableDataTagCreate(timetable, 4),
            )}
          </tr>
          <tr className='bg-white border-b'>
            <td className='text-[12px] md:text-[12px] xl:text-[14px] py-2 border-x text-gray-700'>
              5限
              <br />
              <span className='text-gray-400 text-[10px] md:text-[10px] xl:text-[12px] pt-1 inline-block'>
                17:00 ~ 18:30
              </span>
            </td>
            {timetableData?.map((timetable) =>
              tableDataTagCreate(timetable, 5),
            )}
          </tr>
        </tbody>
      </table>

      <button
        disabled={fetchAttendanceData.isLoading}
        type='button'
        onClick={attendanceModeHandler}
        className='fixed bottom-16 md:bottom-4 left-2/4 -translate-x-1/2 w-40 text-white bg-accent hover:opacity-70 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-3xl focus:shadow-3xl'
      >
        {fetchAttendanceData.isLoading && (
          <svg
            role='status'
            className='inline w-4 h-4 mr-3 text-white animate-spin'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='#E5E7EB'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentColor'
            />
          </svg>
        )}
        {/* eslint-disable-next-line no-nested-ternary */}
        {fetchAttendanceData.isLoading
          ? 'Loading...'
          : isAttendanceMode
          ? '出席状況を非表示'
          : '出席状況を表示'}
      </button>
    </>
  );
};

export default Table;
