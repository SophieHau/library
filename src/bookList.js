import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BookList extends Component {
  state = {
    books: [],
  };

  getBooks = () => {
    axios({
      url: 'http://localhost:5000/books/',
      method: 'get',
    })
      .then((response) => {
        this.setState({ books: response.data });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    const { books } = this.state;
    return (
      <div style={{ width: '100%' }}>
        {books.map((book) => (
          <List key={book.id} component="nav">
            <ListItem style={{ justifyContent: 'space-between' }}>
              <Link
                to={`/books/${book.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                <ListItem button>
                  <ListItemIcon>
                    <LocalLibraryIcon />
                  </ListItemIcon>
                  <ListItemText primary={book.name} />
                </ListItem>
              </Link>
              <Button color="default" variant="contained">
                Edit
              </Button>
            </ListItem>
            <Divider />
          </List>
        ))}
      </div>
    );
  }
}

export default BookList;
