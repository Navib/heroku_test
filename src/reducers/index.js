import { combineReducers } from 'redux';
import GridReducer from './reducer_grid';
import GridReducerLarge from './reducer_grid_large';
import MovieSlidesReducer from './reducer_movie_slides';

const rootReducer = combineReducers({
  gridItem: GridReducer,
  gridItemLarge: GridReducerLarge,
  movieSlides: MovieSlidesReducer
});

export default rootReducer;
