import { VFC } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  pageTitle: string;
};
const Title: VFC<Props> = ({ pageTitle }) => {
  return (
    <Helmet>
      <title>{pageTitle} | ECCcomp School App</title>
    </Helmet>
  );
};

export default Title;
