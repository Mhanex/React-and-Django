import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared';

export default function Customers() {

    const [customers, setCustomers] = useState([]);
   

    useEffect(() => {
         const url = baseUrl + 'customers';
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setCustomers(data.customers);
            });
    }, []);
    

    return (
        <>
            <h3>Cusotmers</h3>
            {customers ?
                customers.map((customer) => {
                    return (
                        <ul>
                            <li>
                                <Link 
                                    style={{textDecoration: "none"}} 
                                    to={"/customer/" + customer.id}
                                >
                                    {customer.name}
                                </Link>
                            </li>
                        </ul>
                    );
                })
            : null }
        </>
         
    );
}

