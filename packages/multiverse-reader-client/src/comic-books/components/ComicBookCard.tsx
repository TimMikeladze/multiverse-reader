import Card, { CardContent } from 'material-ui/Card';
import { StyleRulesCallback } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import * as PropTypes from 'prop-types';
import * as  React from 'react';
import { compose, withHandlers } from 'recompose';
import common from '../../util/common';

const styles: StyleRulesCallback = (theme) => ({
  root: {
    padding: theme.spacing.unit,
  },
  card: {
    display: 'flex',
    padding: theme.spacing.unit,
  },
  image: {
    width: 170,
    height: 255,
    cursor: 'pointer',
  },
  details: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
  },
});

const ComicBookCard: React.SFC<any> = ({
  classes,
  handleClick,
  comicBook: {
    name,
    pages: {
      [0]: {
        totalPages,
        image,
      },
    },
  },
  match,
  history,
}) => (
    <div className={classes.root}>
      <Card className={classes.card}>
        <img
          className={classes.image}
          src={image}
          onClick={handleClick}
        />
        <div className={classes.details}>
          <CardContent className={classes.content} onClick={handleClick}>
            <Typography variant='headline'>{name}</Typography>
            <Typography variant='subheading' color='textSecondary'>
              {totalPages} pages
            </Typography>
          </CardContent>
          <div className={classes.actions} />
        </div>
      </Card>
    </div>);

ComicBookCard.propTypes = {
  classes: PropTypes.object.isRequired,
  comicBook: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

ComicBookCard.defaultProps = {

};

export default compose(
  common({
    styles,
  }),
  withHandlers(() => ({
    handleClick: (props) => () => props.history.push(`/comic-books/${props.comicBook.name}`),
  })),
)(ComicBookCard);
