import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

function usePageViews() {
  let location = useLocation();

  useEffect(() => {
    if (!window.GA_INITALIZED) {
      ReactGA.initialize('UA-213853430-1');
      window.GA_INITALIZED = true;
    }
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);
}
export default usePageViews;
