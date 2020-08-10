import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

class Book extends Component {
  state = {
    book: {},
    author: {},
  };

  getBook = (bookId) => {
    axios({
      url: 'http://localhost:5000/books/' + bookId + '/',
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
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {book.name}
          </Typography>
          <Typography variant="body2" component="p">
            ISBN: {book.isbn}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            By: {author.firstName} {author.lastName}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Book;
