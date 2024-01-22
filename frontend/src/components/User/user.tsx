import React, { useState } from 'react';
import { Messages } from '../../types';
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createLoad} from '../../store/messagesSlice';
import { createMessages } from '../../store/messagesThunks';

const User = () => {
  const navigate = useNavigate();
  const isLoading = useAppSelector(createLoad);
  const dispatch = useAppDispatch();
  const [messages, setMessages] = useState<Messages>({
    date: dayjs().toISOString(),
    author: '',
    message: '',
  });

  const changeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessages((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const saveSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createMessages(messages));
    if (!messages.author || !messages.message) {
      console.log('Author and message must be filled out');
      return;
    }
    setMessages({
      date: dayjs().toISOString(),
      author: '',
      message: '',
    })
    navigate('/')
  };

  const now = new Date();
  const createdAt = now.toISOString();

  return (
    <form onSubmit={saveSubmit}>
      <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={2}>
        <Grid item xs={2}>Date:{dayjs(createdAt).format('DD.MM.YYYY HH:mm:ss')}</Grid>
        <Grid item xs={4}>
          <TextField
            id="author"
            name="author"
            label="author"
            variant="outlined"
            value={messages.author}
            onChange={changeCategory}
          />
        </Grid>
        <Grid item xs={4} alignItems="center">
          <Grid item>
            <TextField
              id="message"
              name="message"
              label="message"
              variant="outlined"
              value={messages.message}
              onChange={changeCategory}
            />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="outlined" disabled={isLoading}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default User;