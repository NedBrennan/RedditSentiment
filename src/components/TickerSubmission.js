import React, { Component } from 'react';
import { Box, Button, FormGroup, Input, InputLabel, Grid, CircularProgress } from '@material-ui/core';
import Post from './Post'
import { connect } from 'react-redux'
import { fetchComments } from '../store/redditPost'

class tickerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: '',
      subReddit: '',
      loading: false,
      posts: null
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.setState({loading: true})
    await this.props.fetchComments('wallstreetbets ', 'AAPL')
    this.setState({loading: false})
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.ticker)
  }

  render() {
    return (
      <Box display='relative' justifyContent='center'>

      <Box display='relative' width="600px" justifySelf="center">
        <FormGroup>
          <InputLabel htmlFor='subReddit'>Choose a SubReddit</InputLabel>          
          <Input name='subReddit' onChange={this.handleChange} />
          <InputLabel htmlFor='ticker'>Choose a ticker symbol to analyze</InputLabel>
          <Input name='ticker' onChange={this.handleChange} />
          <Button type="submit" variant="contained" onClick={this.handleSubmit}>
            Analyze
          </Button>
            </FormGroup>
          </Box>
          <Grid container spacing={3} justify="center">
            {this.props.posts.length > 0 ? this.props.posts.map(post => {
              return <Post post={post} />
            }) : this.state.loading ? <CircularProgress disableShrink /> : 'choose a ticker symbol' }
          </Grid>
      </Box>
    );
  }
}

const mapState = (state) => ({
  posts: state.posts,
});

const mapDispatch = (dispatch) => ({
  fetchComments: (subReddit, ticker) => dispatch(fetchComments(subReddit, ticker))
});

export default connect(mapState, mapDispatch)(tickerInput);
