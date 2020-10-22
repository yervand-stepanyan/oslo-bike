import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import LocalParkingIcon from '@material-ui/icons/LocalParking';

import { useStore } from '../../state/useStore';
import { useStyles } from './Buttons.style';

function Buttons() {
  const classes = useStyles();
  const { isBikeActive, handleBikeSelect, handleParkingSelect } = useStore();

  return (
    <div>
      <ButtonGroup
        aria-label="outlined primary button group"
        color="primary"
        fullWidth
        variant="contained"
      >
        <Button
          className={isBikeActive ? classes.activeBtn : classes.defaultBtn}
          onClick={handleBikeSelect}
        >
          <DirectionsBikeIcon />
        </Button>
        <Button
          className={!isBikeActive ? classes.activeBtn : classes.defaultBtn}
          onClick={handleParkingSelect}
        >
          <LocalParkingIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Buttons;
