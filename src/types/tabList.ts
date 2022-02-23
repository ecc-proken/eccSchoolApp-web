import tabDataList from 'data/tabDataList';

const pageList = [...tabDataList] as const;
const pageNameArray = pageList.map((obj) => obj.pageName);
export type tabName = typeof pageNameArray[number];
