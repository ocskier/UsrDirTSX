import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

interface ISearchAppBarProps {
  input: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  }),
);

export default function SearchAppBar(props: ISearchAppBarProps) {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ minHeight: '100px' }}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Company Directory
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
