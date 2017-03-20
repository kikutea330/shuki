import React from 'react';
import ReactDOM from 'react-dom';
import ShukiListContainer from './views/containers/ShukiListContainer';

ReactDOM.render(
  <ShukiListContainer />,
  document.getElementById('root')
);

import ShukiListActions from './actions/ShukiListActions';

ShukiListActions.createShuki("additionalObj1");
ShukiListActions.createShuki("additionalObj2");
ShukiListActions.createShuki("additionalObj3");
