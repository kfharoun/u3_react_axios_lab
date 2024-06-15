import { PEOPLE_PATH } from "../../globals"
import axios from "axios"
import { useEffect, useState } from "react"

export default function PeopleList () {

    const [people, setPeople] = useState([])

    useEffect(() => {
        const getPeople=async () => {
            const response = await axios.get(`${PEOPLE_PATH}`)
            //console.log(response)
            setPeople(response.data.results)
            
        }
        getPeople()
    }, [])
   console.log(people)


    if (people.length === 0) {
        return <h1>Finding actors...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    people.map((person) => (
                        <div key = {person.name} className="pathDesc">
                            <h2>{person.name}</h2>
                            <p>Height: {person.height}cm</p>
                            <p>Hair: {person.hair_color}</p>
                            <p>Skin tone: {person.skin_color}</p>
                            <p>Eye color: {person.eye_color}</p>
                            <p>Birth year: {person.birth_year}</p>
                            <p>Gender: {person.gender}</p>
                            </div>
                    ))
                }
            </div>
        )
    }
    
}