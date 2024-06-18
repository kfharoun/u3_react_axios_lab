import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PeopleDetails() {
    const [person, setPeople] = useState()
    let { id } = useParams()

    useEffect(()=> {
        const getPerson = async() => {
            const response = await axios.get(`https://swapi.dev/api/people/`)
            setPeople(response.data.results[id])
        }
        getPerson()
    }, [])  
return person ? (
    <div className="detail">
        <h2>{person.name}</h2>
        <p>Hair Color: {person.hair_color}</p>
        <p>Eye Color: {person.eye_color}</p>
        <p>Birth Year: {person.birth_year}</p>
        <p>Gender: {person.gender}</p>
        <Link to="/characters"> Return to characters</Link>
    </div>
) : <h3>Scanning confidential information...</h3>
}
