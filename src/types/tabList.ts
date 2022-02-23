import tabList from 'data/tabDataList';

const pageList = [...tabList] as const;
const pageNameArray = pageList.map((obj) => obj.pageName);
export type pageName = typeof pageNameArray[number];
