import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiMessages, Messages, MessagesTypes } from '../types';
import axiosApi from '../axiosApi';
import { AppDispatch } from '../app/store';

export const createMessages = createAsyncThunk<void, Messages>(
  'messages/create',
  async () => {
    await axiosApi.post('/messages')
  }
);

export const fetchMessages = createAsyncThunk<MessagesTypes[], undefined, {dispatch: AppDispatch}>(
  'messages/fetch',
  async () => {
    const transactionResponse = await axiosApi.get<ApiMessages | null>('/messages');
    const data = transactionResponse.data;

    let newData: MessagesTypes[] = [];

    if (data) {
      newData = Object.keys(data).map(key => {
        const dishKey = data[key];
        return {
          ...dishKey,
          id: key,
        }
      });
    }

    return newData;
  }
);