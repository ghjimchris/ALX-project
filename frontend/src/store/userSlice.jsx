// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import Axios from '../utils/axios';
import { showMessage } from '../pages/AddRecord1';

// Create an async thunk for user login
export const loginUser = createAsyncThunk('user/login', async (credentials) => {
  // Make an API call to authenticate the user
  try {
    const response = await Axios.post('/api/account/login', credentials)

    // Return the user data or handle errors here
    if(response.data.token){
      const { token } = response.data;

      window.localStorage.setItem('token', `Bearer ${token}`);
      const data = jwt_decode(token);
      return data;
    }
  } catch (err) {
    if(typeof (err) === "string"){
      console.error(err);
      showMessage(err, 'error');
    }
    
    if(Array.isArray(err.msg)){
      console.error(err.msg[0]);
      showMessage(err.msg[0], 'error')
    }

    if(typeof (err.message) === "string"){
      console.error(err.message);
      showMessage(err.message, 'error')
    }
  }
  // return response.data;
});

const initialState = { data: null, status: 'idle', error: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      // state.data = null;
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('persist:root');
      console.log('Logging out')

      return { data: null, status: 'logout', error: null }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

// Export any synchronous actions, if needed
// export const
