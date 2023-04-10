import { configureStore } from '@reduxjs/toolkit'
import citiesSlice from './slices/citiesSlice';
import  GeolocationSlice  from './slices/locationSlice'

const store = configureStore({
  reducer: {
    location: GeolocationSlice,
    cities:citiesSlice,
  }
})

export type RootState = ReturnType <typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;