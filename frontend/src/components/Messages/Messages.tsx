import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {fetchLoad, getMessages} from '../../store/messagesSlice';
import { useEffect } from 'react';
import { fetchMessages } from '../../store/messagesThunks';
import {CircularProgress, Paper, Typography} from "@mui/material";

const Messages = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(fetchLoad);
  const messages = useAppSelector(getMessages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        messages.map((message) => (
          <Paper key={message.id} elevation={3}>
            <Typography variant="h6">{message.author}</Typography>
            <Typography variant="body1">{message.message}</Typography>
            <Typography variant="caption">{message.date}</Typography>
          </Paper>
        ))
      )}
    </div>
  );
};

export default Messages;