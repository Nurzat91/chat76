import { createSlice } from '@reduxjs/toolkit';
import { createMessages, fetchMessages } from './messagesThunks';
import { RootState } from '../app/store';
import { MessagesTypes } from '../types';

interface MessagesState{
  createLoading: boolean;
  data: MessagesTypes [];
  fetchLoading: boolean;
}

const initialState: MessagesState = {
  createLoading: false,
  data: [],
  fetchLoading: false,
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createMessages.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createMessages.fulfilled, (state) => {
      state.createLoading = false;
    });
    builder.addCase(createMessages.rejected, (state) => {
      state.createLoading = false;
    });

    builder.addCase(fetchMessages.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, {payload: items}) => {
      state.fetchLoading = false;
      state.data = items;
    });
    builder.addCase(fetchMessages.rejected, (state) => {
      state.fetchLoading = false;
    });
  }
});

export const messagesReducer = messagesSlice.reducer;
export const getMessages= (state: RootState) => state.messages.data;
export const createLoad = (state: RootState) => state.messages.createLoading;

export const fetchLoad = (state: RootState) => state.messages.fetchLoading;