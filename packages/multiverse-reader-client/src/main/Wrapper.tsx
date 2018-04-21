import { createMuiTheme, MuiThemeProvider, StyleRulesCallback, withStyles } from 'material-ui/styles';
import * as React from 'react';

const styles: StyleRulesCallback = (theme) => ({
  '@global': {
    body: {
      fontFamily: theme.typography.fontFamily,
      margin: 0,
    },
    a: {
      textDecoration: 'none',
    },
  },
});

const customTheme = createMuiTheme();

const Wrapper = ({ children }) =>
  <MuiThemeProvider theme={customTheme}>
    {children}
  </MuiThemeProvider>;

export default withStyles(styles)(Wrapper);
