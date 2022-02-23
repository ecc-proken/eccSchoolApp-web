import tabDataList from 'data/tabDataList';

const pageNameArray = tabDataList.map((obj) => obj.pageName);
export type tabName = typeof pageNameArray[number];
