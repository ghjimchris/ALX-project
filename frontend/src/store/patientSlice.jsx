// patientSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../utils/axios';
import { showMessage } from '../pages/AddRecord1';


const initialState = { data: [], fetched: false, status: 'idle', error: null };

// Create an async thunk for user login
export const fetchPatients = createAsyncThunk('patient/fetch', async () => {
  // Make an API call to authenticate the user
  try {
    const response = await Axios.get('/api/patient/all')
  
    // Return the user data or handle errors here
    if(response.status === 200){
      const { patients } = response.data;
      return patients;
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
});

// Create an async thunk for user login
export const addPatient = createAsyncThunk('patient/add', async (credentials) => {
  // Make an API call to authenticate the user
  try {
    // console.log({ credentials })
    const response = await Axios.post('/api/patient/add', credentials)
  
    // Return the user data or handle errors here
    if(response.status === 200){
      const { patient, msg } = response.data;
      showMessage(msg || message, 'success')
      return patient;
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
});

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    deletePatient: async (state, action) => {
      const id = action.payload;

      if(typeof(parseInt(idToRemove)) !== "number") console.error("Invalid item");
      const idToRemove = parseInt(id);

      const { status } = await Axios.post('/api/patient/delete', credentials);

      if(status === 200 || status === 204){
        console.log('Patient deleted');
        state.data = state.data.filter((pt) => pt.id !== idToRemove);
      }
    },
    logoutClearRecords: async (state) => {
      console.log('Clearing records after logout')
      // return { data: [], fetched: false, status: 'logout', error: null };
      state.data = [];
      state.fetched = false;
      state.status = 'logout';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // console.log({ payload: action.payload })
        state.data = action.payload;
        state.fetched = true;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPatient.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        console.log({ payload: action.payload });
        state.data = [ ...state.data, action.payload ]
      })
      .addCase(addPatient.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { deletePatient, logoutClearRecords } = patientSlice.actions;
export default patientSlice.reducer;

// Export any synchronous actions, if needed
// export const
