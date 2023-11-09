import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Notfound from './Notfound';
import { baseUrl } from '../shared';



export default function Customer () {
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState(false);
    const [editMode, setEditMode] = useState({}); // Step 1: Edit Mode State
    const [changedFields, setChangedFields] = useState({});
    const [changed, setChanged] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        if (!customer) return;
        if (!customer) return;

        let equal = true;
        if (customer.name !== editMode.name) equal = false;
        if (customer.occupation !== editMode.occupation) equal = false;

        if (equal) setChanged(false);

    });

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
                setEditMode(data.customer);
              
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    
    function updateCustomer() {
        const url = baseUrl + 'api/customers/' + id;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editMode), // Combine original data with changed fields
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to save changes');
                }
                return response.json();
            })
            .then((data) => {
                setCustomer(data.customer);
                setEditMode(data.customer); 
                setChangedFields({});
                setChanged(false);
                navigate('/customers');
            })
            .catch((error) => {
                console.error('Error saving changes:', error);
            });
    }
    

    return (
        <>  
        
            
            <h4>Single Customer Details</h4>
            {notFound ? <p>The customer with id {id} does not exist!</p> :  null}
            {customer ? (
                <div>
                    <p className="m-2 block px-2">ID: {customer.id}</p>
                    <input 
                        className="m-2 block px-2" 
                        type="text" 
                        value={editMode.name} 
                        onChange={(e) => {
                            setEditMode({...editMode, name: e.target.value});
                            setChangedFields({ ...changedFields, name: true});
                            setChanged(true);
                        }}
                    />
                    <input 
                        className="m-2 block px-2" 
                        type="text" 
                        value={editMode.occupation} 
                        onChange={(e) => {
                            setEditMode({...editMode, occupation: e.target.value});
                            setChangedFields({ ...changedFields, occupation: true});
                            setChanged(true);
                        }}
                    /><br />
                  {changed ?
                    <>  
                        <button
                            className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-full"
                            onClick={() => {
                                // Reset changed fields to their initial values
                                setEditMode((prevEditMode) => {
                                    // Create a copy of the previous edit mode state
                                    const newEditMode = { ...prevEditMode };

                                    // Reset only the fields that were changed
                                    Object.keys(changedFields).forEach((field) => {
                                        newEditMode[field] = customer[field];
                                    });

                                    return newEditMode;
                                });

                                setChangedFields({});
                                setChanged(false);
                            }}
                        >
                            Cancel
                        </button>

                        <button 
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={updateCustomer}
                            >
                            Save
                        </button>
                    </>
                : null}
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
                className="m-2 block px-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded"
            >
                Delete
            </button>
            <br />
            <Link to="/customers" className="m-2 block">Go Back</Link>
        </>
    );

}