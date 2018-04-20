import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import * as React from 'react';
import { render } from 'react-dom';

const Wrapper = ({ children }) =>
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>;

export default Wrapper;
