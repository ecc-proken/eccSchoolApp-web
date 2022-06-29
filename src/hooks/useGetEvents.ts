import Event, { CalendarEvent } from 'types/event';
import axios from 'axios';
import userDataState from 'globalState/userDataState';
import { useRecoilValue } from 'recoil';
import UserData from 'types/userInfo';

type SelectedDate = {
  year: number;
  month: number;
};

const getEvents = async (
  userData: UserData,
  selectedDate: SelectedDate,
): Promise<CalendarEvent[]> => {
  const { data } = await axios.post<Event[]>(
    `${process.env.REACT_APP_API_URL}/calendar/${selectedDate.year}/${
      selectedDate.month < 10 ? `0${selectedDate.month}` : selectedDate.month
    }`,
    userData,
  );

  return data.map((d) => ({
    allDay: true,
    title: d.plans.title[0],
    start: new Date(selectedDate.year, selectedDate.month - 1, Number(d.day)),
    end: new Date(selectedDate.year, selectedDate.month - 1, Number(d.day)),
  }));
};

const useGetEvents = (selectedDate: SelectedDate) => {
  const userData = useRecoilValue(userDataState);
  return getEvents(userData, selectedDate);
};

export default useGetEvents;
