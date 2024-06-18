import { PEOPLE_PATH } from "../../globals"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

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
   //console.log(people)
   let navigate = useNavigate()

   const showPeople = (key) => {
       navigate(`${key}`)
     }

    if (people.length === 0) {
        return <h1>Finding characters...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    people.map((person, key) => (
                        <div key={key} onClick={()=>showPeople(key)} className="pathDesc">
                            <h2>{person.name}</h2>
                            </div>
                    ))
                }
            </div>
        )
    }
    
}