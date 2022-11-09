import {
  faTable,
  faChartLine,
  faBell,
  faCalendarAlt,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

const tabList = [
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
  {
    path: '/calendar',
    pageName: 'カレンダー',
    icon: faCalendarAlt,
  },
] as const;

export default tabList;
