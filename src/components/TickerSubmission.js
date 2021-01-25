import React, { Component } from 'react';
import {
  Box,
  Button,
  FormGroup,
  Input,
  InputLabel,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import Post from './Post';
import { connect } from 'react-redux';
import { fetchComments } from '../store/redditPost';
import Sentiment from './SentimentReport';

class tickerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: '',
      subReddit: '',
      loading: false,
      posts: null,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    await this.props.fetchComments(this.state.subReddit, this.state.ticker);
    this.setState({ loading: false });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.ticker);
  };

  render() {
    return (
      <Box display="flex" justifycontent="center" flexDirection='column'>
        <Box display="relative" width="600px">
          <FormGroup>
            <InputLabel htmlFor="subReddit">Choose a SubReddit</InputLabel>
            <Input name="subReddit" onChange={this.handleChange} />
            <InputLabel htmlFor="ticker">
              Choose a ticker symbol to analyze
            </InputLabel>
            <Input name="ticker" onChange={this.handleChange} />
            <Button
              type="submit"
              variant="contained"
              onClick={this.handleSubmit}
            >
              Analyze
            </Button>
          </FormGroup>
        </Box>
        <Grid container spacing={3}>
          {this.props.posts.length > 0 ? (
            this.props.posts.map((post) => {
              return (
                <React.Fragment>
                  <Post post={post} />
                  <Sentiment Sentiment={post} />
                </React.Fragment>
              );
            })
          ) : this.state.loading ? (
            <CircularProgress disableShrink />
          ) : (
            'choose a ticker symbol'
          )}
        </Grid>
      </Box>
    );
  }
}

const mapState = (state) => ({
  posts: state.posts,
});

const mapDispatch = (dispatch) => ({
  fetchComments: (subReddit, ticker) =>
    dispatch(fetchComments(subReddit, ticker)),
});

export default connect(mapState, mapDispatch)(tickerInput);
