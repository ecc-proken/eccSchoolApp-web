type Event = {
  day: string;
  plans: [{ title: string; link: string }];
};
export type CalendarEvent = {
  allDay: boolean;
  title: string;
  start: Date;
  end: Date;
};

export default Event;
