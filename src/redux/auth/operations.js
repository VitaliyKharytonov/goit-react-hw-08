import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://666583ffd122c2868e40eaa6.mockapi.io/';

export const register = createAsyncThunk('auth/register', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const login = createAsyncThunk('auth/login', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
