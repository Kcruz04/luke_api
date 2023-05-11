import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Search from "./components/Search";
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
