export type subjectData = {
  classroom: string;
  subjectTitle: string;
  teacher: string;
};

type Timetable = {
  date: string;
  weekday: string;
  timetable: {
    [key: number]: subjectData;
  };
};
export default Timetable;
