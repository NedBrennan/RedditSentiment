import React, { Component } from 'react';
import { Box, Button, FormGroup, Input, InputLabel, Grid, CircularProgress } from '@material-ui/core';
import reddit from '../redditInfo'
import Post from './Post'

class tickerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: '',
      loading: false,
      posts: null
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.setState({loading: true})
    let ticker = await reddit(this.state.ticker)
    this.setState({loading: false, posts: ticker})
  }

  handleChange = (event) => {
    this.setState({
      ticker: event.target.value,
    });
    console.log(this.state.ticker)
  }

  render() {
    return (
      <Box display='relative' justifyContent='center'>

      <Box display='relative' width="600px" justifySelf="center">
        <FormGroup>
          <InputLabel htmlFor='ticker'>Choose a ticker symbol to analyze</InputLabel>
          <Input name='ticker' onChange={this.handleChange} />
          <Button type="submit" variant="contained" onClick={this.handleSubmit}>
            Analyze
          </Button>
            </FormGroup>
          </Box>
          <Grid container spacing={3} justify="center">
            {this.state.posts ? this.state.posts.map(post => {
              return <Post post={post} />
            }) : this.state.loading ? <CircularProgress disableShrink /> : 'choose a ticker symbol' }
          </Grid>
      </Box>
    );
  }
}

export default tickerInput