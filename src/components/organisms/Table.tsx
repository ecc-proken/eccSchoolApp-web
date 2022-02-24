import TableData from 'components/atoms/TableData';
import { VFC } from 'react';

const Table: VFC = () => {
  return (
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

          {[...Array(5)].map(() => (
            <TableData>1コマ</TableData>
          ))}
        </tr>
        <tr className='bg-white border-b'>
          <td className='py-4 border-x text-xs md:text-sm text-gray-700'>
            2<br />
            <span className='text-gray-400'>11:00 ~ 12:30</span>
          </td>

          {[...Array(5)].map(() => (
            <TableData>1コマ</TableData>
          ))}
        </tr>
        <tr className='bg-white border-b'>
          <td className='py-4 border-x text-xs md:text-sm text-gray-700'>
            3<br />
            <span className='text-gray-400'>13:30 ~ 15:00</span>
          </td>

          {[...Array(5)].map(() => (
            <TableData>1コマ</TableData>
          ))}
        </tr>
        <tr className='bg-white border-b'>
          <td className='py-4 border-x text-xs md:text-sm text-gray-700'>
            4<br />
            <span className='text-gray-400'>15:15 ~ 16:45</span>
          </td>

          {[...Array(5)].map(() => (
            <TableData>1コマ</TableData>
          ))}
        </tr>
        <tr className='bg-white border-b'>
          <td className='py-4 border-x text-xs md:text-sm text-gray-700'>
            5<br />
            <span className='text-gray-400'>17:00 ~ 18:30</span>
          </td>

          {[...Array(5)].map(() => (
            <TableData>1コマ</TableData>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
