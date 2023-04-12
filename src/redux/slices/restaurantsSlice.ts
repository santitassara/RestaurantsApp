import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCurrentRestaurants } from "../../api/restaurantsApi";
import { CoordsInterface } from "../../components/interfaces/globalInterfaces";

export const getRestaurants = createAsyncThunk(
  "get/getCurrentRestaurants",
  async (args:CoordsInterface, thunkAPI )=>{
    //console.log(args);
    
    try {
     const response:any = await getCurrentRestaurants(args)
     return response.businesses;
    } catch (error:any) {
      const message = (error.response && error.response.data)
      return thunkAPI.rejectWithValue(message)
    }
  
}) 

const initialState = {
  data:[],
  inSuccess:false,
  message:"",
  error:false,
  loading: false
}

const restaurantsSlice = createSlice({
  name:"restaurants",
  initialState,
  reducers: {
    reset : (state) =>{
      state.loading=false;
      state.inSuccess=false;
      state.error=false;
      state.message="";
    }
    },
  extraReducers:builder => {
    builder.addCase(getRestaurants.pending, (state,  action:PayloadAction<any>) => {
        state.loading = true;
    });
    builder.addCase(getRestaurants.fulfilled, (state, action:PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
      state.inSuccess = true;
    });
    builder.addCase(getRestaurants.rejected, (state, action:PayloadAction<any>) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
      state.data=[]
  });
  },
});

export default restaurantsSlice.reducer;