import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeoLocationState {
  lat: number | null,
  lon: number | null,
}

const initialState: GeoLocationState = {
  lat: null,
  lon: null,
}

const GeolocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setGeoLocation: (state, action:PayloadAction<any>) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    }
    },
});

export const { setGeoLocation } = GeolocationSlice.actions
export default GeolocationSlice.reducer