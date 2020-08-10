import React, { Component } from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

class Author extends Component {
  state = {
    author: {},
  };

  getAuthor = (authorId) => {
    axios({
      url: 'http://localhost:5000/authors/' + authorId,
      method: 'get',
    })
      .then((response) => {
        this.setState({ author: response.data });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getAuthor(this.props.match.params.id);
  }

  render() {
    const { author } = this.state;
    return (
      <Card
        style={{
          width: '100%',
        }}
      >
        <CardContent
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            display: 'flex',
          }}
        >
          <Typography variant="h5" component="h2">
            {author.firstName + ' ' + author.lastName}
          </Typography>
          <Button color="default" variant="contained">
            Edit
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default Author;
