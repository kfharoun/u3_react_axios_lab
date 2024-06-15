import { STARSHIP_PATH } from "../../globals"
import axios from "axios"
import { useEffect, useState } from "react"
import '../App'

export default function StarshipsList () {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        const getStarships=async () => {
            const response = await axios.get(`${STARSHIP_PATH}`)
            //console.log(response)
            setStarships(response.data.results)
            
        }
        getStarships()
    }, [])
//    console.log(starships)
    if (starships.length === 0) {
        return <h1>Starships taking off...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    starships.map((starship) => (
                        <div key = {starship.name} className="pathDesc">
                            <h2>{starship.name}</h2>
                            <p>Model: {starship.model}</p>
                            <p>Manufactured by {starship.manufacturer}</p>
                            <p>Class: {starship.starship_class}</p>
                            </div>
                    ))
                }
            </div>
        )
    }
    
}

