import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCurrentRestaurantsReview } from "../../api/restaurantsApi";

export const getRestaurantsReview = createAsyncThunk(
  "get/getCities",
  async (arg:string, thunkAPI )=>{
  
    try {
     const response:any = await getCurrentRestaurantsReview(arg)
     
     return response?.reviews;
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

const restaurantsReviewsSlice = createSlice({
  name:"restaurantsReview",
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
    builder.addCase(getRestaurantsReview.pending, (state,  action:PayloadAction<any>) => {
        state.loading = true;
    });
    builder.addCase(getRestaurantsReview.fulfilled, (state, action:PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
      state.inSuccess = true;
    });
    builder.addCase(getRestaurantsReview.rejected, (state, action:PayloadAction<any>) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
      state.data=[]
  });
  },
});

export default restaurantsReviewsSlice.reducer;