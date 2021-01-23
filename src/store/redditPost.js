import axios from 'axios';

const initialState = [];

const POST_SENTIMENT = 'POST_SENTIMENT';

const apiPort = 'http://localhost:4500'

export const setComments = (post) => ({
    type: POST_SENTIMENT,
    post: post,
  });

export const fetchComments = (tickerSymbol) => {
    return async (dispatch) => {
      const comments = await axios.get(`${apiPort}/api/comments/?ticker=${tickerSymbol}`);
      dispatch(setComments(comments.data));
    };
  };

export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case POST_SENTIMENT:
      state = action.post;
      return state;
    default:
      return state;
  }
}
