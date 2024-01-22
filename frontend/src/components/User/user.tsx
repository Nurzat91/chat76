import { useState } from 'react';
import { Messages } from '../../types';
import { Button, Grid, TextField } from '@mui/material';

const User = () => {
  const [messages, setMessages] = useState<Messages>({
    author: '',
    message: '',
  });
  return (
    <form>
      <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={2}>
        <Grid item xs={5}>
          <TextField
            id="author"
            label="author"
            variant="outlined"
            value={messages.author}
          />
        </Grid>
        <Grid item xs={5} alignItems="center">
          <Grid item>
            <TextField
              id="message"
              label="message"
              variant="outlined"
              value={messages.message}
            />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default User;