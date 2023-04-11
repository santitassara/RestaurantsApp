import { configureStore } from '@reduxjs/toolkit'
import citiesSlice from './slices/citiesSlice';
import  GeolocationSlice  from './slices/locationSlice'
import restaurantsReviewSlice from './slices/restaurantsReviewSlice';
import  restaurantsSlice  from './slices/restaurantsSlice'


const store = configureStore({
  reducer: {
    location: GeolocationSlice,
    cities:citiesSlice,
    restaurants:restaurantsSlice,
    restaurantsReview:restaurantsReviewSlice
  }
})

export type RootState = ReturnType <typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;