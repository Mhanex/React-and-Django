import Header from './components/Header.js';
import Employees from './pages/Employees';
import Team from './pages/Team.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  
  return (
      <BrowserRouter>
        <Header>
          <Routes>
             <Route path='/' element={<Employees />} />
             <Route path='/team' element={<Team />} />

          </Routes>
        </Header>
      </BrowserRouter>
    );
  
}

export default App;
