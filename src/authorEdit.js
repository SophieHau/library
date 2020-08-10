import React, { Component } from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';

class BookAdd extends Component {
  state = {
    authorFirstName: '',
    authorLastName: '',
    authorId: this.props.match.params.id,
  };

  getAuthor = () => {
    axios({
      url: 'http://localhost:5000/authors/' + this.state.authorId,
      method: 'get',
    })
      .then((response) => {
        this.setState({
          authorFirstName: response.data.firstName,
          authorLastName: response.data.lastName,
        });
      })
      .catch((error) => console.log(error));
  };

  editAuthor = () => {
    if (
      !this.state.authorId ||
      !this.state.authorFirstName ||
      !this.state.authorLastName
    ) {
      return;
    } else {
      axios({
        url: 'http://localhost:5000/authors/' + this.state.authorId,
        method: 'put',
        data: {
          id: this.state.authorId,
          firstName: this.state.authorFirstName,
          lastName: this.state.authorLastName,
        },
      });
      this.props.history.push('/authors/' + this.state.authorId);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.getAuthor(this.state.authorId);
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
          onClick={this.editAuthor}
        >
          Update Author
        </Button>
      </Card>
    );
  }
}

export default BookAdd;
