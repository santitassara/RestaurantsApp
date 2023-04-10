import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCurrentCity } from "../../api/citiesApi";

export const getCities = createAsyncThunk(
  "get/getCities",
  async (arg:string, thunkAPI )=>{
  
    try {
     const response:any = await getCurrentCity(arg)
     
     return response?.data;
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

const citiesSlice = createSlice({
  name:"cities",
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
    builder.addCase(getCities.pending, (state,  action:PayloadAction<any>) => {
        state.loading = true;
    });
    builder.addCase(getCities.fulfilled, (state, action:PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
      state.inSuccess = true;
    });
    builder.addCase(getCities.rejected, (state, action:PayloadAction<any>) => {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
      state.data=[]
  });
  },
});

export default citiesSlice.reducer;