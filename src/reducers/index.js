import { combineReducers } from 'redux';
import GridReducer from './reducer_grid';
import GridReducerLarge from './reducer_grid_large';

const rootReducer = combineReducers({
  gridItem: GridReducer,
  gridItemLarge: GridReducerLarge
});

export default rootReducer;
