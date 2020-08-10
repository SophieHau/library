import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { Button } from '@material-ui/core';

class AuthorList extends Component {
  state = {
    authors: [],
  };

  getAuthors = () => {
    axios({
      url: 'http://localhost:5000/authors',
      method: 'get',
    })
      .then((response) => {
        this.setState({ authors: response.data });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getAuthors();
  }

  render() {
    const { authors } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <Link to="/authors/create" style={{ textDecoration: 'none' }}>
          <Button
            color="default"
            style={{ marginBottom: 40 }}
            variant="contained"
          >
            Add Author
          </Button>
        </Link>
        {authors.map((author) => (
          <List key={author.id} component="nav">
            <ListItem style={{ justifyContent: 'space-between' }}>
              <Link
                to={`/authors/${author.id}`}
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
                  <ListItemText
                    primary={author.firstName + ' ' + author.lastName}
                  />
                </ListItem>
              </Link>
            </ListItem>
            <Divider />
          </List>
        ))}
      </div>
    );
  }
}

export default AuthorList;
