import React, { Component } from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';

class BookAdd extends Component {
  state = {
    bookName: '',
    isbn: '',
    authorFirstName: '',
    authorLastName: '',
    authorId: '',
    bookId: this.props.match.params.id,
  };

  getBook = () => {
    axios({
      url: 'http://localhost:5000/books/' + this.state.bookId,
      method: 'get',
    })
      .then((response) => {
        this.setState({
          bookName: response.data.name,
          isbn: response.data.isbn,
          authorFirstName: response.data.author.firstName,
          authorLastName: response.data.author.lastName,
          authorId: response.data.author.id,
        });
      })
      .catch((error) => console.log(error));
  };

  editBook = () => {
    if (
      !this.state.bookId ||
      !this.state.bookName ||
      !this.state.isbn ||
      !this.state.authorId ||
      !this.state.authorFirstName ||
      !this.state.authorLastName
    ) {
      return;
    } else {
      axios({
        url: 'http://localhost:5000/books/' + this.state.bookId,
        method: 'put',
        data: {
          id: this.state.bookId,
          name: this.state.bookName,
          isbn: this.state.isbn,
          author: {
            id: this.state.authorId,
            firstName: this.state.authorFirstName,
            lastName: this.state.authorLastName,
          },
        },
      });
      this.props.history.push('/books/' + this.state.bookId);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.getBook(this.state.bookId);
  }

  render() {
    return (
      <Card
        style={{
          width: '100%',
          padding: 20,
          flexDirection: 'column',
          justifyContent: 'space-between',
          display: 'flex',
        }}
      >
        <CardContent
          style={{
            justifyContent: 'space-around',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Input
            name="bookName"
            value={this.state.bookName}
            placeholder="Book Name"
            style={{ marginBottom: 15 }}
            onChange={this.handleChange}
          />
          <Input
            name="isbn"
            value={this.state.isbn}
            placeholder="ISBN"
            style={{ marginBottom: 15 }}
            onChange={this.handleChange}
          />
          <Input
            name="authorFirstName"
            value={this.state.authorFirstName}
            placeholder="Author first name"
            style={{ marginBottom: 15 }}
            onChange={this.handleChange}
          />
          <Input
            name="authorLastName"
            value={this.state.authorLastName}
            placeholder="Author last name"
            style={{ marginBottom: 15 }}
            onChange={this.handleChange}
          />
        </CardContent>
        <Button
          color="default"
          type="submit"
          style={{ height: '40%', maxWidth: '20%', alignSelf: 'center' }}
          variant="contained"
          onClick={this.editBook}
        >
          Update Book
        </Button>
      </Card>
    );
  }
}

export default BookAdd;
