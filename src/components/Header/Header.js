import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { LOGO_IMAGE, TITLE } from '../../globals/constants';
import { useStyles } from './Header.style';

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <AppBar position="static">
        <Toolbar>
          <div>
            <img
              alt={LOGO_IMAGE.title}
              className={classes.logoImage}
              src={LOGO_IMAGE.src}
            />
          </div>
          <div className={classes.titleWrapper}>
            <span className={classes.titleSpan}>{TITLE}</span>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
