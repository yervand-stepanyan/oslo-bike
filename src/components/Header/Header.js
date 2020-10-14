import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { LOGO_IMAGE, TITLE } from '../../globals/constants';
import { useStyles } from './Header.style';

function Header() {
  const classes = useStyles();

  return (
    <div>
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
            <Typography variant="h6">{TITLE}</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
