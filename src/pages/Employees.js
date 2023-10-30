import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';

function Employees() {
  const [role, setRole] = useState('');
  const [employees, setEmployees] = useState([
      {
        id: 1,
        name: "Mhanex",
        role: "FullStack Developer", 
        img: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg",
        alt: "Mhanex"
      },
      {
        id: 2,
        name: "Jane Doe",
        role: "Product Manager", 
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        alt:  "Jane Doe"
      },
      {
        id: 3,
        name: "Laurel Maxwell",
        role: "Network Security Engineer", 
        img: "https://images.pexels.com/photos/1362724/pexels-photo-1362724.jpeg",
        alt: "Laurel Maxwell"
      },
      {
        id: 4,
        name: "Michael Ruthford",
        role: "Data Scientist", 
        img: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg",
        alt: "Michael Ruthford"
      }
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id){
        return {...employee, name: newName, role: newRole};
      }

        return employee;

    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img){
      const newEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: img
      };
      setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  
  return (
    <div className="App bg-gray-300 min-h-screen">
        
      { showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center my-4">
           
             {employees.map((employee) => {
                const editEmployee = (
                  <EditEmployee 
                    id={employee.id}
                    name={employee.name} 
                    role={employee.role} 
                    updateEmployee={updateEmployee}
                  />
                );
                return (
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name} 
                    role={employee.role} 
                    img={employee.img} 
                    alt={employee.alt}
                    editEmployee={editEmployee}
                  />
                );
             })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>

   ) : (
           <p>You are not authorised</p>
      )}
           
    </div>
  );
}

export default Employees;
