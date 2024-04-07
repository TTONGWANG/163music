import { useRoutes } from 'react-router-dom';
import routes from './router'
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      {useRoutes(routes)}
      <Footer />
    </div>
  );
}

export default App;
