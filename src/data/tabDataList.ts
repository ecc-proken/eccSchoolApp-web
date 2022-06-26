import {
  faTable,
  faChartLine,
  faBell,
  // faCalendarAlt,
  // faCog,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

const tabDataList = [
  {
    path: '/',
    pageName: 'ホーム',
    icon: faHome,
  },
  {
    path: '/timetable',
    pageName: '時間割',
    icon: faTable,
  },
  {
    path: '/attendance',
    pageName: '出席率',
    icon: faChartLine,
  },
  {
    path: '/news',
    pageName: 'お知らせ',
    icon: faBell,
  },
  // {
  //   path: '/calendar',
  //   pageName: 'カレンダー',
  //   icon: faCalendarAlt,
  // },
  // {
  //   path: '/settings',
  //   pageName: '設定',
  //   icon: faCog,
  // },
] as const;

export default tabDataList;
