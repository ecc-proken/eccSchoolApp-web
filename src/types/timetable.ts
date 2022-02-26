type Timetable = {
  date: string;
  weekday: string;
  timetable: {
    [key: number]: string;
  };
};
export default Timetable;
