import { VFC, useState, useEffect } from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import ja from 'date-fns/locale/ja';

import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import useGetEvents, { eventAtom } from 'hooks/useGetEvents';
import LoadingSpiner from 'components/atoms/LoadingSpiner';
import { useRecoilState } from 'recoil';

const locales = {
  ja,
};

const messages = {
  date: '日付',
  time: '時間',
  event: '予定',
  allDay: '終日',
  work_week: '週',
  yesterday: '昨日',
  tomorrow: '明日',

  week: '1週間',
  day: '1日',
  month: 'カレンダー',
  previous: '先月',
  next: '翌月',
  today: '今月',
  agenda: 'リスト',

  noEventsInRange: '予定がありません',
  showMore: (total: number) => `+${total} more`,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const currentDate = new Date();
const Calendar: VFC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState(currentDate);
  const [events] = useRecoilState(
    eventAtom(`${date.getFullYear()}-${date.getMonth() + 1}`),
  );

  useGetEvents({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });

  useEffect(() => {
    setIsLoading(true);
    if (events !== null) setIsLoading(false);
  }, [events]);

  const onNavigate = (d: Date) => {
    setDate(d);
  };

  return (
    <>
      {isLoading && <LoadingSpiner />}

      <BigCalendar
        localizer={localizer}
        messages={messages}
        events={events || []}
        toolbar
        onNavigate={onNavigate}
        className='h-full text-xs md:text-sm pb-24 gap-4'
        views={['month', 'agenda']}
        popup
      />
    </>
  );
};

export default Calendar;
