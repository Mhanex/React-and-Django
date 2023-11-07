import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate, Link } from "react-router-dom";
import Notfound from "./Notfound";
export default function Definition () {
    const [word, setWord] = useState([]);
    const [notFound, setNotFound] = useState(false);
    let { search } = useParams();
    // const navigate = useNavigate();


    useEffect(() => {
       const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                }
                return response.json()
            })
            .then((data) => {
                setWord(data[0].meanings);
                // console.log(data[0].meanings);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    if (notFound === true) {
        return (
            <>
             <Notfound />
             <Link style={{ textDecoration: "none"}} to="/dictionary">Search another</Link>
            </>
        );
    }
    return (
        <>
            <div className="definition">
                 
                {word ? (
                    <>                
                        <Link to="/dictionary" style={{textDecoration: "none", color: "black"}}>Back</Link>
                        <h4>Result</h4>
                        {word.map((meaning) => {
                        return  (
                                <p key={uuidv4()}>
                                    <b>{' ' + meaning.partOfSpeech} <br /></b>
                                    {meaning.definitions[0].definition}
                                    
                                    
                                </p>  
                            );
                        })}
                    </>

               ) : null}
            </div>
        </>
    );
}