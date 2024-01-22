import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material';
import { Link as StyleLink } from 'react-router-dom';

const Link = styled(StyleLink)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit'
  },
});
const MessagesToolbar = () => {
  return (
    <AppBar position="sticky" sx={{mb: 2}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link to="/">Messages</Link>
            <Link to="/user">User</Link>
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MessagesToolbar;