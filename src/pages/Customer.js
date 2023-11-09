import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Notfound from './Notfound';
import { baseUrl } from '../shared';


export default function Customer () {
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState(false);
    const [editMode, setEditMode] = useState(false); // Step 1: Edit Mode State
    const [formData, setFormData] = useState({}); // Step 4: Form Data

    const { id } = useParams();
    const navigate = useNavigate();

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
                // console.log(data);
                setCustomer(data.customer);
                // Step 4: Initialize formData with customer data
                setFormData(data.customer);
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






















            <button 
                onClick={() =>{
                    const url = baseUrl + 'api/customers/' + id;
                    fetch(url, {method: 'DELETE', headers: {'content-Type': 'application/json'}})
                        .then((response) => {
                            if (!response.ok){
                                throw new Error('Swomething went wrong');
                            }
                            navigate('/customers');
                        })
                        .catch((e) =>{
                            console.log(e);
                        })
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded"
            >
                Delete
            </button>
            <br />
            <Link to="/customers">Go Back</Link>
        </>
    );

}