import { Container } from 'react-bootstrap';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';

function App() {
  return (
    <div className="font color-body">
      <Navbar />
      <Container>
        <MovieList />
      </Container>
    </div>
  );
}

export default App;
