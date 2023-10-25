import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [role, setRole] = useState('');
  const [employees, setEmployees] = useState([
      {
        name: "Mhanex",
        role: "FullStack Developer", 
        img: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg",
        alt: "Mhanex"
      },
      {
        name: "Jane Doe",
        role: "Product Manager", 
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        alt:  "Jane Doe"
      },
      {
        name: "Laurel Maxwell",
        role: "Network Security Engineer", 
        img: "https://images.pexels.com/photos/1362724/pexels-photo-1362724.jpeg",
        alt: "Laurel Maxwell"
      },
      {
        name: "Michael Ruthford",
        role: "Data Scientist", 
        img: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg",
        alt: "Michael Ruthford"
      }
  ]);
  const showEmployees = true;
  
  return (
    <div className="App">

      { showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
             {employees.map((employee) => {
                return (
                  <Employee
                    key={uuidv4()}
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img} 
                    alt={employee.alt}
                  />
                );
             })}
          </div>
        </>

   ) : (
           <p>You are not authorised</p>
      )}
           
    </div>
  );
}

export default App;
