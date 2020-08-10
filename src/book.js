import React, { Component } from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Book extends Component {
  state = {
    book: {},
    author: {},
  };

  getBook = (bookId) => {
    axios({
      url: 'http://localhost:5000/books/' + bookId,
      method: 'get',
    })
      .then((response) => {
        this.setState({ book: response.data, author: response.data.author });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getBook(this.props.match.params.id);
  }
  render() {
    const { book, author } = this.state;
    return (
      <Card
        style={{
          width: '100%',
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          display: 'flex',
        }}
      >
        <CardContent
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h5" component="h2">
            {book.name}
          </Typography>
          <Typography variant="body2" component="p">
            ISBN: {book.isbn}
          </Typography>
          <Typography size="small">
            By: {author.firstName} {author.lastName}
          </Typography>
        </CardContent>
        <Button color="default" style={{ height: '40%' }} variant="contained">
          Edit
        </Button>
      </Card>
    );
  }
}

export default Book;
