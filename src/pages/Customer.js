import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Notfound from './Notfound';
import { baseUrl } from '../shared';

export default function Customer () {
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        const url = baseUrl + 'api/customers/' + id;
        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setCustomer(data.customer);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Handle the error appropriately
            });
    }, []);
    

    return (
        <>  
            
            <h4>Single Customer Details</h4>
            {notFound ? <p>The customer with id {id} does not exist!</p> :  null}
            {customer ? (
                <div>
                    <p>{customer.id}</p>
                    <p>{customer.name}</p>
                    <p>{customer.occupation}</p>
                </div>
            ): null}
            <Link to="/customers">Go Back</Link>
        </>
    );

}