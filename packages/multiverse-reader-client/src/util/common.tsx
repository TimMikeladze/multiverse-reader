import { StyleRulesCallback } from 'material-ui/styles';
import withStyles from 'material-ui/styles/withStyles';
import withTheme from 'material-ui/styles/withTheme';
import withWidth from 'material-ui/utils/withWidth';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

interface CommonProps {
  styles?: StyleRulesCallback;
  icons?: string;
  labels?: string;
}

const common = ({ styles, icons, labels }: CommonProps) =>
  compose(
    withWidth(),
    withTheme(),
    withStyles(styles as any),
    withRouter,
  );

export default common;
