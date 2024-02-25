import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Login from './components/login';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Login} />
          {/* Add more routes for different pages */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
