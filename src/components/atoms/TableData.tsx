import { memo, ReactNode, VFC } from 'react';

type Props = {
  children?: ReactNode;
  selected?: boolean;
};
const TableData: VFC<Props> = ({ children, selected = false }) => {
  return (
    <td
      className={`text-xs md:text-sm border-r text-gray-700 py-4 ${
        selected ? 'bg-violet-50 bg-opacity-60' : ''
      }`}
    >
      {children}
    </td>
  );
};

export default memo(TableData);
