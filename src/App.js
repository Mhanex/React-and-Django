import Header from './components/Header.js';
import Dictionary from './pages/Dictionary.js';
import Employees from './pages/Employees';
import Team from './pages/Team.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Definition from './pages/Definition.js';
import Notfound from './pages/Notfound.js';



function App() {
  
  return (
      <BrowserRouter>
        <Header>
          <Routes>
             <Route path='/' element={<Employees />} />
             <Route path='/team' element={<Team />} />
             <Route path='/dictionary' element={<Dictionary />} />
             <Route 
                  path='/definition/:search' 
                  element={<Definition />}
             />
             <Route path='/notfound' element={<Notfound />} />
             <Route path='*' element={<Notfound />} />
          </Routes>
        </Header>
      </BrowserRouter>
    );
  
}

export default App;
