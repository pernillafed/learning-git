import { BrowserRouter, Route } from 'react-router-dom';
import TodoContextProvider from './contexts/TodoContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <TodoContextProvider>
          <Route exact path="/" component={Home} />
        </TodoContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
