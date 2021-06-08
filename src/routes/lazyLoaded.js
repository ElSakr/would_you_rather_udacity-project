import React from 'react';

export const Home = React.lazy(() => import('../pages/home'));
export const SignIn = React.lazy(() => import('../pages/signIn'));
export const Results = React.lazy(() => import('../pages/results'));
export const LeaderBoard = React.lazy(() => import('../pages/leaderBoard'));
export const NewQuestion = React.lazy(() => import('../pages/new-question'));
export const NotFound = React.lazy(() => import('../pages/notFound'));
