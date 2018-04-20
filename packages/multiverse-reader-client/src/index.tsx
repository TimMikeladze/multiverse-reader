import * as React from 'react';
import { render } from 'react-dom';
import App from './main/App';

render(<App />, document.getElementById('root'));

if ((module as any).hot) {
  (module as any).hot.accept();
}
