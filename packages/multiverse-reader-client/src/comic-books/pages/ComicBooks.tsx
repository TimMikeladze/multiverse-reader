import { StyleRulesCallback } from 'material-ui/styles';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Query } from 'react-apollo';
import { compose } from 'recompose';
import common from '../../util/common';
import ComicBookCard from '../components/ComicBookCard';

const ComicBooksQuery = require('../graphql/queries/ComicBooksQuery');

const styles: StyleRulesCallback = (theme) => ({
  root: {
  },
});

const ComicBooks: React.SFC<any> = ({
  classes,
}) => (
    <div className={classes.root}>
      <Query query={ComicBooksQuery}>
        {({ loading, error, data }) => {
          if (loading) { return 'Loading...'; }
          if (error) { return `Error! ${error.message}`; }

          return (
            data.comicBooks.map((comicBook) =>
              <ComicBookCard
                key={comicBook.name}
                comicBook={comicBook}
              />,
            )
          );
        }}
      </Query>
    </div>
  );

ComicBooks.propTypes = {
  classes: PropTypes.object.isRequired,
};

ComicBooks.defaultProps = {

};

export default compose(
  common({
    styles,
  }),
)(ComicBooks);
