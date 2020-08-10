import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
import Book from './book';
import AuthorList from './authorList';
import Author from './author';
import BookAdd from './bookAdd';
import AuthorAdd from './authorAdd';
import BookEdit from './bookEdit';
import AuthorEdit from './authorEdit';

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
    paddingTop: '56.25%',
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
                    <Link to="/books" style={{ textDecoration: 'none' }}>
                      <Button variant="outlined" color="primary">
                        Book list
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/authors" style={{ textDecoration: 'none' }}>
                      <Button variant="outlined" color="primary">
                        Author list
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              <Switch>
                <Route exact path="/books" component={BookList} />
                <Route path="/books/create" component={BookAdd} />
                <Route path="/authors/create" component={AuthorAdd} />
                <Route path="/books/edit/:id" component={BookEdit} />
                <Route path="/authors/edit/:id" component={AuthorEdit} />
                <Route path="/books/:id" component={Book} />
                <Route path="/authors/:id" component={Author} />
                <Route path="/authors" component={AuthorList} />
              </Switch>
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    </Router>
  );
}
