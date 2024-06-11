import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://666583ffd122c2868e40eaa6.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', newContact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (idContact, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${idContact}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
