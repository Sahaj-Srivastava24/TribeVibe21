import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SocietyCard from './TribeVibe/components/SocietyCard';
import SocietyInfo from './TribeVibe/components/SocietyInfo';

import TribeVibe from './TribeVibe/HomePage'


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TribeVibe/>
        </Route>
        <Route path="/societies/:id">
          <SocietyInfo />
        </Route>
        <Route path="/societies">
          <SocietyCard/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;




