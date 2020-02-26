import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  root: {
    background: 'rgb(0,0,0)',
    background: 'linear-gradient(45deg, rgba(0,0,0,1) 8%, rgba(128,57,100,1) 29%, rgba(204,112,171,1) 41%, rgba(137,90,243,1) 60%, rgba(0,194,203,1) 79%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // transform: 'none',
  },
});

function StyledSkeleton() {
  const classes = useStyles();

  return (
    <Skeleton
      height={'100%'}
      width={'100%'}
      animation="wave"
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
    />
  );
}

export default StyledSkeleton;
