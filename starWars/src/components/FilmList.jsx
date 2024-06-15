import { FILM_PATH } from "../../globals"
import axios from "axios"
import { useEffect, useState } from "react"

export default function FilmList () {

    const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms=async () => {
            const response = await axios.get(`${FILM_PATH}`)
            //console.log(response)
            setFilms(response.data.results)
            
        }
        getFilms()
    }, [])
   console.log(films)
    if (films.length === 0) {
        return <h1>Finding films...</h1>
    } else {
        return (
            <div className="pathInfo">
                {
                    films.map((film) => (
                        <div key = {film.title} className="pathDesc">
                            <h2>{film.title}</h2>
                            <h3>Episode {film.episode_id}</h3>
                            <p>{film.opening_crawl}</p>
                            <h3>Directed by: {film.director}</h3>
                            <h3>Produced by: {film.producer}</h3>
                            <h3>Released: {film.release_date}</h3>
                            </div>
                    ))
                }
            </div>
        )
    }
    
}