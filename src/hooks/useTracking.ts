import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// eslint-disable-next-line import/prefer-default-export
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(`G-${process.env.REACT_APP_GA_KEY}`);
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);
};
