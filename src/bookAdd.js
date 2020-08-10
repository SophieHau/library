import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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
  };

  createBook = (bookId, authorId) => {
    axios({
      url: 'http://localhost:5000/books/',
      method: 'post',
      data: {
        id: bookId,
        name: this.state.bookName,
        isbn: this.state.isbn,
        author: {
          id: authorId,
          firstName: this.state.authorFirstName,
          lastName: this.state.authorLastName,
        },
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const bookId = uuidv4();
    const authorId = uuidv4();
    this.createBook(bookId, authorId);
  };

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
            vale={this.state.isbn}
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
          onClick={this.handleSubmit}
        >
          Add Book
        </Button>
      </Card>
    );
  }
}

export default BookAdd;
