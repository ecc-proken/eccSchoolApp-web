import LoadingSpiner from 'components/atoms/LoadingSpiner';
import TableData from 'components/atoms/TableData';
import useGetTimetable from 'hooks/useGetTimetable';
import { VFC } from 'react';
import { useQueryClient } from 'react-query';
import Timetable from 'types/timetable';

const Table: VFC = () => {
  const queryClient = useQueryClient();
  const cacheData = queryClient.getQueryData<Timetable[]>('timetable');
  const { data, isLoading } = useGetTimetable();
  const timetableData = cacheData || data;

  /**
   * データとコマ目を受け取り、平日のみTableDataコンポーネントを返す
   * @date 2022-02-26
   * @param {Timetable} tableData
   * @param {number} periodNumber
   * @returns {HTMLTableDataCellElement}
   */
  const tableDataTagCreate = (
    { timetable, weekday }: Timetable,
    periodNumber: number,
  ) => {
    if (weekday === '土' || weekday === '日') return;
    if (timetable[periodNumber])
      return <TableData key={weekday}>{timetable[periodNumber]}</TableData>;
    return <TableData key={weekday} />;
  };

  return (
    <>
      {isLoading && <LoadingSpiner />}

      <table className='min-w-full text-center mt-8 h-[94%]'>
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
            <td className='py-4 border-x text-xs md:text-sm text-gray-700'>
              1<br />
              <span className='text-gray-400'>09:15 ~ 10:45</span>
            </td>
            {timetableData?.map((timetable) =>
              tableDataTagCreate(timetable, 1),
            )}
          </tr>
          <tr className='bg-white border-b'>
            <td className='py-4 border-x text-xs md:text-sm text-gray-700'>
              2<br />
              <span className='text-gray-400'>11:00 ~ 12:30</span>
            </td>
            {timetableData?.map((timetable) =>
              tableDataTagCreate(timetable, 2),
            )}
          </tr>
          <tr className='bg-white border-b'>
            <td className='py-4 border-x text-xs md:text-sm text-gray-700'>
              3<br />
              <span className='text-gray-400'>13:30 ~ 15:00</span>
            </td>
            {timetableData?.map((timetable) =>
              tableDataTagCreate(timetable, 3),
            )}
          </tr>
          <tr className='bg-white border-b'>
            <td className='py-4 border-x text-xs md:text-sm text-gray-700'>
              4<br />
              <span className='text-gray-400'>15:15 ~ 16:45</span>
            </td>
            {timetableData?.map((timetable) =>
              tableDataTagCreate(timetable, 4),
            )}
          </tr>
          <tr className='bg-white border-b'>
            <td className='py-4 border-x text-xs md:text-sm text-gray-700'>
              5<br />
              <span className='text-gray-400'>17:00 ~ 18:30</span>
            </td>
            {timetableData?.map((timetable) =>
              tableDataTagCreate(timetable, 5),
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
