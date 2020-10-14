import React from 'react';

import Header from '../components/Header';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Header />
      <div>Main works</div>
    </div>
  );
}

export default Main;
