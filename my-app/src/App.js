import React from 'react';
import { Container } from 'semantic-ui-react';

// import Login from './Login';
// import JobBoard from './JobBoard';
import JobBoard from './JobBoard';
import Ranking from './Ranking'
import Comments from './Comments'




const App = () => (
  <Container>
    <JobBoard />
    <Ranking />
    <Comments />
  </Container>
);

export default App;
