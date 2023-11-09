import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared';
import AddCustomer from './AddCustomer';

export default function Customers() {
    const [customers, setCustomers] = useState([]);
    const [show, setShow] = useState(false);

    function closeModal(){
        setShow(!show)
    }

    useEffect(() => {
         const url = baseUrl + 'api/customers';
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setCustomers(data.customers);
            });
    }, []);
    
    function newCustomer(name, occupation) {
        const data = {name: name, occupation: occupation};
        const url = baseUrl + 'api/customers';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((response) =>{
            if (!response.ok){
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then((data) => {
            closeModal();
            console.log(data);
            setCustomers([...customers, data.customer]);
        })
        .catch((e) =>{
            console.log(e);
        });
    }
    return (
        <>
            <h3>Cusotmers</h3>
            <ul>
                {customers 
                    ? customers.map((customer) => {
                
                        return (
                            <li key={customer.id}>
                                <Link style={{textDecoration: "none"}} to={'/customer/' + customer.id}>
                                        {customer.name}
                                </Link>
                            </li>
                        );
                    })
                : null }
            </ul>
            <AddCustomer 
                newCustomer={newCustomer} 
                show={show} 
                closeModal={closeModal} 
            />
        </>
         
    );
}

