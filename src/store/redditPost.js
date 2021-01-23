import axios from 'axios';

const initialState = [];

const POST_SENTIMENT = 'POST_SENTIMENT';

const apiPort = 'http://localhost:4500'

export const setComments = (posts) => ({
    type: POST_SENTIMENT,
    posts: posts,
  });

export const fetchComments = (tickerSymbol) => {
    return async (dispatch) => {
      const posts = await axios.get(`${apiPort}/api/comments/?ticker=${tickerSymbol}`);
      dispatch(setComments(posts.data));
    };
  };

export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case POST_SENTIMENT:
      state = action.posts;
      return state;
    default:
      return state;
  }
}
