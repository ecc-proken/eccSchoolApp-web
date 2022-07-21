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
  week: '1週間',
  day: '1日',
  month: '1ヶ月',
  previous: '先月',
  next: '翌月',
  today: '今日',
  agenda: '予定',

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
        className='h-full text-xs md:text-sm pb-24'
        views={['month']}
      />
    </>
  );
};

export default Calendar;
