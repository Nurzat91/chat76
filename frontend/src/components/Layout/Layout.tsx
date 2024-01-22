import React from "react";
import MessagesToolbar from '../MessagesToolbar/MessagesToolbar';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme';

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div>
          <header>
            <MessagesToolbar/>
          </header>
          <main>
            <Container maxWidth="xl">
              {children}
            </Container>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;