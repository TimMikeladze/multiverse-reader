import { StyleRulesCallback } from 'material-ui/styles';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Query } from 'react-apollo';
import 'react-image-gallery/styles/css/image-gallery.css';
import { compose } from 'recompose';
import common from '../../util/common';
import ComicBookViewer from '../components/ComicBookViewer';

const ComicBookQuery = require('../graphql/queries/ComicBookQuery');

const styles: StyleRulesCallback = (theme) => ({
  root: {
  },
});

const ComicBook: React.SFC<any> = ({
  classes,
  match,
}) => (
    <div className={classes.root}>
      <Query query={ComicBookQuery} variables={{ name: match.params.name }}>
        {({ loading, error, data }) => {
          if (loading) { return 'Loading...'; }
          if (error) { return `Error! ${error.message}`; }

          return <ComicBookViewer comicBook={data.comicBook} />;
        }}
      </Query>
    </div>
  );

ComicBook.propTypes = {
  classes: PropTypes.object.isRequired,
};

ComicBook.defaultProps = {

};

export default compose(
  common({
    styles,
  }),
)(ComicBook);
