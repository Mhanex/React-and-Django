import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dictionary() {
   const [word, setWord] = useState('');
   const navigate = useNavigate();
   

   useEffect(() => {

   });

    return (
            <form 
                className="flex space-x-2"
                onSubmit={() => {
                    navigate('/definition/' + word)
                }}
            >  
                    <h5>Enter word to search</h5><br />
                    <input
                        className="shrink min-w-0 px-2 py-1 rounded"
                        type="text"
                        placeholder="e.g. Planet"
                        onChange={(event) => {
                            setWord(event.target.value);
                        }}
                    />
                    
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">Search</button>
            </form>
    );
}