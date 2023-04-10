import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeoLocationState {
  lat: number | null,
  lng: number | null,
}

const initialState: GeoLocationState = {
  lat: null,
  lng: null,
}

const GeolocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setGeoLocation: (state, action:PayloadAction<any>) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    }
    },
});

export const { setGeoLocation } = GeolocationSlice.actions
export default GeolocationSlice.reducer