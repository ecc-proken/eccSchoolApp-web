import { memo, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
};
const TableData: VFC<Props> = ({ children }) => {
  return (
    <td className='text-xs md:text-sm border-r text-gray-700 py-4'>
      {children}
    </td>
  );
};

export default memo(TableData);
