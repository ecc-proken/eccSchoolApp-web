import { memo, VFC } from 'react';
import { subjectData } from 'types/timetable';

type Props = {
  tableData?: subjectData;
  selected?: boolean;
};
const TableData: VFC<Props> = ({ tableData, selected = false }) => {
  return (
    <td
      className={`text-[10px] md:text-[0.9vw] border-r text-gray-700 h-[14vh] md:h-[18vh] px-1 ${
        selected ? 'bg-violet-50 bg-opacity-60' : ''
      }`}
    >
      <p>{tableData?.subjectTitle}</p>
      <span className='text-[10px] md:text-[0.8vw] text-gray-400'>
        {tableData?.teacher.replace('　', ' ')}
      </span>
      <br />
      <span className='text-[10px] md:text-[0.8vw] text-accent font-bold'>
        {tableData?.classroom}
      </span>
    </td>
  );
};

export default memo(TableData);
