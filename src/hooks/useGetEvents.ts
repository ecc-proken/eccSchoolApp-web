import Event, { CalendarEvent } from 'types/event';
import axios from 'axios';
import tokenAtom from 'atom/tokenAtom';
import { atomFamily, useRecoilState, useRecoilValue } from 'recoil';
import Token from 'types/userInfo';

type SelectedDate = {
  year: number;
  month: number;
};

export const eventAtom = atomFamily<null | CalendarEvent[], string>({
  key: 'eventAtom',
  default: null,
});

const getEvents = async (
  token: Token,
  selectedDate: SelectedDate,
): Promise<CalendarEvent[]> => {
  const { data } = await axios.post<Event[]>(
    `${process.env.REACT_APP_API_URL}/calendar/${selectedDate.year}/${
      selectedDate.month < 10 ? `0${selectedDate.month}` : selectedDate.month
    }`,
    token,
  );

  return data.map((d) => ({
    allDay: true,
    title: d.plans.title[0],
    start: new Date(selectedDate.year, selectedDate.month - 1, Number(d.day)),
    end: new Date(selectedDate.year, selectedDate.month - 1, Number(d.day)),
  }));
};

const useGetEvents = (selectedDate: SelectedDate) => {
  const token = useRecoilValue(tokenAtom);
  const [event, setEvent] = useRecoilState(
    eventAtom(`${selectedDate.year}-${selectedDate.month}`),
  );
  if (event === null) {
    getEvents(token, selectedDate).then((d) => {
      setEvent(d);
    });
  }
  return event;
};

export default useGetEvents;
