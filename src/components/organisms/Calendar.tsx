import { VFC, useState } from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import ja from 'date-fns/locale/ja';

import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import useGetEvents from 'hooks/useGetEvents';
import { CalendarEvent } from 'types/event';
import LoadingSpiner from 'components/atoms/LoadingSpiner';

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

const now = new Date();
const Calendar: VFC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>();
  useGetEvents({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  }).then((d) =>
    JSON.stringify(events) === JSON.stringify(d) ? null : setEvents(d),
  );

  return (
    <>
      {!events && <LoadingSpiner />}

      <BigCalendar
        localizer={localizer}
        messages={messages}
        events={events}
        toolbar
        className='h-full text-xs md:text-sm'
        views={['month']}
      />
    </>
  );
};

export default Calendar;
