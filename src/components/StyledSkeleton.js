import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  header: {
    background: 'rgb(0,0,0)',
    background:
      'linear-gradient(45deg, rgba(0,0,0,1) 8%, rgba(128,57,100,1) 29%, rgba(204,112,171,1) 41%, rgba(137,90,243,1) 60%, rgba(0,194,203,1) 79%)',
    borderRadius: 3,
    border: 0,
    color: 'red',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  secondary: {
    background: 'black',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    borderRadius: 3,
    border: 0,
    padding: '0 30px',
    '&::after': {
      background: 'linear-gradient(90deg, transparent, theme.palette.primary.dark, transparent)',
    },
  },
}));

function StyledSkeleton() {
  const classes = useStyles();

  return (
    <Fragment>
      <Skeleton
        height={'100%'}
        width={'100%'}
        animation="pulse"
        classes={{
          root: classes.header, // class name, e.g. `classes-nesting-root-x`
        }}
      />
      <Skeleton
        animation="wave"
        style={{ transform: 'none' }}
        height={'100vh'}
        width={'100%'}
        classes={{
          root: classes.secondary, // class name, e.g. `classes-nesting-root-x`
        }}
      />
    </Fragment>
  );
}

export default StyledSkeleton;
