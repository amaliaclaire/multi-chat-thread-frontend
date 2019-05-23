import React from 'react';
import { Container } from 'semantic-ui-react';

// import Login from './Login';
// import JobBoard from './JobBoard';
import JobBoard from './JobBoard';
import Ranking from './Ranking'




const App = () => (
  <Container>
    <JobBoard />
    <Ranking /> 
  </Container>
);

export default App;
