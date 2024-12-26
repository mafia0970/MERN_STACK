import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isloading: false,
  user: null,
};

// Async thunk for user registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (FormData) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      FormData,
      { withCredentials: true }
    );
    return response.data; // This will be available in the fulfilled case
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // This reducer could be used to set the user directly
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isloading = false;
        // Assuming response data contains user details
        state.user = action.payload.user;
        state.isAuthenticated = true; // Registration success, user is authenticated
      })
      .addCase(registerUser.rejected, (state) => {
        state.isloading = false;
      });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
