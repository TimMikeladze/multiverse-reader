import {  StyleRulesCallback, withStyles } from 'material-ui/styles';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { client } from '../apollo';
import ComicBook from '../comic-books/pages/ComicBook';
import ComicBooks from '../comic-books/pages/ComicBooks';
import Wrapper from './Wrapper';

const styles: StyleRulesCallback = (theme) => ({
  leftNav: {
    marginTop: theme.spacing.unit,
  },
  contents: {
    width: '100%',
    maxWidth: theme.breakpoints.width('lg'),
    margin: `${theme.spacing.unit * 4}px auto`,
    padding: `0 ${theme.spacing.unit * 4}px`,
    [theme.breakpoints.down('sm')]: {
      margin: `0 auto`,
      padding: theme.spacing.unit * 2,
    },
  },
});

const App = () =>
  <Wrapper>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ComicBooks} />
          <Route exact path='/comic-books' component={ComicBooks} />
          <Route exact path='/comic-books/:name/:page?' component={ComicBook} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  </Wrapper>;

export default withStyles(styles)(App);
