import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import * as LazyComponent from './lazyLoaded';
// import Loader from '../Components/Loader/Loader';
import PrivateRoute from './privateRoute';
import { PATH_NAME } from './pathNames';
import { Route, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <Suspense fallback={'Loading ...'}>
      <Switch>
        {/*  Private routes, user must be authrized to navigate to it */}
        <PrivateRoute
          component={() => <LazyComponent.Home />}
          path={PATH_NAME.HOME}
          exact
        />

        <PrivateRoute
          component={() => <LazyComponent.Results />}
          path={PATH_NAME.RESULTS}
          exact
        />

        <PrivateRoute
          component={() => <LazyComponent.LeaderBoard />}
          path={PATH_NAME.LEADER_BOARD}
          exact
        />

        <PrivateRoute
          component={() => <LazyComponent.NewQuestion />}
          path={PATH_NAME.NEW_QUESTION}
          exact
        />
        {/* Public routes that doesn't need any auth */}
        {/* <LazyComponent.SignIn path={PATH_NAME.SIGN_IN} exact /> */}

        <PrivateRoute
          component={() => <LazyComponent.Results/>}
          path={PATH_NAME.RESULTS}
          exact
        />
        <Route
          exact
          path={PATH_NAME.SIGN_IN}
          component={LazyComponent.SignIn}
        />
      </Switch>
    </Suspense>
  );
};

export default Routes;
