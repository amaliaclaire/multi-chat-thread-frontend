import React from 'react';
import { Container } from 'semantic-ui-react';

// import Login from './Login';
// import JobBoard from './JobBoard';
import JobBoard from './components/JobBoard';
import Ranking from './components/Ranking'
import Comments from './components/Comments'




const App = () => (
  <Container>
    <JobBoard />
    <Ranking />
    <Comments />
  </Container>
);

export default App;
