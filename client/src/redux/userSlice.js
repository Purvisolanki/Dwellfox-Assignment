import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// Define async thunks for login and register
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to login');
      }
      return data;
    } catch (error) {
      console.error('Login Error:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log('Response Status:', response.status);
      const data = await response.json();
      console.log('Response Data:', data);
      if (!response.ok) {
        throw new Error(data.message || 'Failed to register');
      }
      return data;
    } catch (error) {
      console.error('Register Error:', error);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  users: [],
  currentUser: null,
  dialogState: {
    UpdateUserDialog: false,
  },
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem('currentUser');
      localStorage.removeItem('isLoggedIn');
      toast.success('Logout Successful');
    },
    handleUpdateUser: (state, action) => {
      const { firstname, lastname } = action.payload;
      state.currentUser.firstname = firstname;
      state.currentUser.lastname = lastname;
      toast.success('Profile Updated Successfully!');
    },
    handleUpdateUserDialog: (state, action) => {
      state.dialogState.UpdateUserDialog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
        localStorage.setItem('isLoggedIn', true);
        toast.success('Login Successful!');
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users.push(action.payload);
        toast.success('Successfully Signed Up!');
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { logout, handleUpdateUser, handleUpdateUserDialog } = userSlice.actions;
export default userSlice.reducer;
