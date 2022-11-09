import tabList from 'constant/tabList';

const pageNameArray = tabList.map((obj) => obj.pageName);
export type tabName = typeof pageNameArray[number];
