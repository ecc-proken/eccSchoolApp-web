import Event, { CalendarEvent } from 'types/event';
import userAtom from 'atom/userAtom';
import { atomFamily, useRecoilState, useRecoilValue } from 'recoil';
import User from 'types/user';
import { fetchWithToken } from 'libs/fetchInstance';

type SelectedDate = {
  year: number;
  month: number;
};

export const eventAtom = atomFamily<null | CalendarEvent[], string>({
  key: 'eventAtom',
  default: null,
});

const getEvents = async (
  userValue: User,
  selectedDate: SelectedDate,
): Promise<CalendarEvent[]> => {
  const { data } = await fetchWithToken(userValue).get<Event[]>(
    `/calendar/${selectedDate.year}/${
      selectedDate.month < 10 ? `0${selectedDate.month}` : selectedDate.month
    }`,
  );

  return data.map((d) => ({
    allDay: true,
    title: d.plans[0].title,
    start: new Date(selectedDate.year, selectedDate.month - 1, Number(d.day)),
    end: new Date(selectedDate.year, selectedDate.month - 1, Number(d.day)),
  }));
};

const useGetEvents = (selectedDate: SelectedDate) => {
  const userValue = useRecoilValue(userAtom);
  const [event, setEvent] = useRecoilState(
    eventAtom(`${selectedDate.year}-${selectedDate.month}`),
  );
  if (event === null) {
    getEvents(userValue, selectedDate).then((d) => {
      setEvent(d);
    });
  }
  return event;
};

export default useGetEvents;
