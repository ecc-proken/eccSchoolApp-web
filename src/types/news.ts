type News = {
  id: string;
  title: string;
  date: string;
  tag: string;
  link: string;
};

export type NewsDetail = {
  title: string;
  data: string;
  date: string;
  tag: string;
  attachments: string[];
};

export default News;
