import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const initialState = {
  things: [
    {
      name: 'test',
      guid: '123',
    },
  ],
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'GET_THINGS_SUCCESS':
      return { things: action.json.things}
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(thunk, logger)
  )
  return store;
}
