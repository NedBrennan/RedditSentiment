import React, { Component } from 'react';
import { Box, Button, FormGroup, Input, InputLabel } from '@material-ui/core';
import reddit from '../redditInfo'

class tickerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let ticker = await reddit(this.state.ticker)
    console.log(ticker)
  }

  handleChange = (event) => {
    this.setState({
      ticker: event.target.value,
    });
    console.log(this.state.ticker)
  }

  render() {
    return (
      <Box width="600px" justifySelf="center">
        <FormGroup>
          <InputLabel htmlFor='ticker'>Choose a ticker symbol to analyze</InputLabel>
          <Input name='ticker' onChange={this.handleChange} />
          <Button type="submit" variant="contained" onClick={this.handleSubmit}>
            Analyze
          </Button>
        </FormGroup>
      </Box>
    );
  }
}

export default tickerInput