export type subjectData = {
  period: string;
  classroom: string;
  subjectTitle: string;
  teacher: string;
};

type Timetable = {
  date: string;
  weekday: string;
  timetable: subjectData[];
};
export default Timetable;
