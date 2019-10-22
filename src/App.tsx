import React from 'react';
import classes from './App.module.scss';
import AuthRoutes from './auth';
import { BrowserRouter } from 'react-router-dom';

interface Props {
}

const App: React.FC<Props> = (props) => {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <header className={classes.Header}>
          <h1>Test</h1>
          <AuthRoutes />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
