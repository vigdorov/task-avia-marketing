import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import {userSelector} from './selectors';
import {fetchUser} from './actions';

import ActionPage from './ActionPage';
import FinalPage from './FinalPage';

function AppRoute({user, fetchUser}) {
  const render = ({history}) => {
    if (!user.id) {
      fetchUser();
      return null;
    }
    if (user.shared && user.email) {
      history.replace('/final');
      return <FinalPage />;
    }
    history.replace('/');
    return <ActionPage />;
  };

  return <Route render={render}/>;
}

export default connect(userSelector, {fetchUser})(AppRoute);