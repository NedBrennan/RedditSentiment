import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import redditPostReducer from './store/redditPost';

const reducer = combineReducers({
  comments: redditPostReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store
