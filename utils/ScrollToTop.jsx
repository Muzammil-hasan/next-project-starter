import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'next/router';

const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default withRouter(ScrollToTop);
