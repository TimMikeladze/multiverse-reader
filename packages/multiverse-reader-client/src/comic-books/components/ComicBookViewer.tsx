import Card, { CardContent } from 'material-ui/Card';
import { StyleRulesCallback } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import * as PropTypes from 'prop-types';
import * as  React from 'react';
import ImageGallery from 'react-image-gallery';
import { compose, withHandlers } from 'recompose';
import common from '../../util/common';

const styles: StyleRulesCallback = (theme) => ({
  root: {
  },
  image: {
    width: 540,
    height: 'auto',
  },
});

const ComicBookViewer: React.SFC<any> = ({
  classes,
  comicBook: {
    name,
    pages,
  },
  match,
  history,
}) => (
    <div className={classes.root}>
      <ImageGallery
        items={pages.map((page) => ({ original: page.image }))}
        useBrowserFullscreen
        renderItem={({ original }) => <img className={classes.image} src={original} />}
      />
    </div>
  );

ComicBookViewer.propTypes = {
  classes: PropTypes.object.isRequired,
  comicBook: PropTypes.object.isRequired,
};

ComicBookViewer.defaultProps = {

};

export default compose(
  common({
    styles,
  }),
)(ComicBookViewer);
