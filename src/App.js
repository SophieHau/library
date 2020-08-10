import React, { useState } from 'react';
import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Container,
} from '@material-ui/core';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { makeStyles } from '@material-ui/core/styles';
import BookList from './bookList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Book from './book';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Library() {
  const classes = useStyles();
  const [page, setPage] = useState('books');

  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <LocalLibraryIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              My Library
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                My Library
              </Typography>

              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Link to="/books/" style={{ textDecoration: 'none' }}>
                      <Button
                        onClick={() => {
                          setPage('books');
                        }}
                        variant={page === 'books' ? 'contained' : 'outlined'}
                        color="primary"
                      >
                        Book list
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    {/* <Link to="/authors/"> */}
                    <Button
                      onClick={() => setPage('authors')}
                      variant={page === 'authors' ? 'contained' : 'outlined'}
                      color="primary"
                    >
                      Author list
                    </Button>
                    {/* </Link> */}
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              <Switch>
                <Route exact path="/books/" component={BookList} />
                <Route path="/books/:id/" component={Book} />
                {/* <Route path="/authors/" component={Authors} />
                <Route path="/authors/id/" component={Author} /> */}
              </Switch>
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    </Router>
  );
}
