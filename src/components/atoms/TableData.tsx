import { memo, VFC } from 'react';
import { subjectData } from 'types/timetable';

type Props = {
  tableData?: subjectData;
  selected?: boolean;
  rate?: string;
};
const TableData: VFC<Props> = ({ tableData, selected = false, rate }) => {
  return (
    <td
      className={`text-[10px] md:text-[12px] xl:text-[14px] border-r text-gray-700 h-[14vh] md:h-[18vh] px-1 ${
        selected ? 'bg-violet-50 bg-opacity-60' : ''
      }`}
    >
      <p>{tableData?.subjectTitle}</p>
      {rate !== undefined ? (
        <span className='text-[8px] md:text-[10px] xl:text-[12px] text-gray-400'>
          出席率: <span className='text-accent font-bold'>{rate}</span>
        </span>
      ) : (
        <>
          <span className='text-[8px] md:text-[10px] xl:text-[12px] text-gray-400'>
            {tableData?.teacher.replace('　', ' ')}
          </span>
          <br />
          <span className='text-[8px] md:text-[10px] xl:text-[12px] text-accent font-bold'>
            {tableData?.classroom}
          </span>
        </>
      )}
    </td>
  );
};

export default memo(TableData);
