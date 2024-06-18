import { FILM_PATH } from "../../globals"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function FilmList () {

    const [films, setFilms] = useState([])




    useEffect(() => {
        const getFilms=async () => {
            const response = await axios.get(`${FILM_PATH}`)
            setFilms(response.data.results)
            
        }
        getFilms()
    }, [])

    let navigate = useNavigate()

   const showMovie = (key) => {
       navigate(`${key}`)
     }
    
    if (films.length === 0) {
        return <h1>Finding films...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    films.map((film, key) => (
                        <div key={key} onClick={()=>showMovie(key)} className="pathDesc">
                            <h2>{film.title}</h2>
                            </div>
                    ))
                }
            </div>
        )
    }
    
}