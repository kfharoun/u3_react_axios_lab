import { STARSHIP_PATH } from "../../globals"
import axios from "axios"
import { useEffect, useState } from "react"
import '../App'
import { useNavigate } from "react-router-dom"

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

    let navigate = useNavigate()

    const showShip = (key) => {
        navigate(`${key}`)
      }

//    console.log(starships)
    if (starships.length === 0) {
        return <h1>Starships taking off...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    starships.map((starship, key) => (
                        <div key={key} onClick={()=>showShip(key)} className="pathDesc">
                            <h2>{starship.name}</h2>
                            </div>
                    ))
                }
            </div>
        )
    }
    
}

