import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function FilmDetails(){
    const [film, setFilm] = useState()
    let {id} = useParams()

    useEffect(()=>{
        const getFilm = async() => {
          const response = await axios.get(`https://swapi.dev/api/films/`)
          setFilm(response.data.results[id])
        }
        getFilm()
      },[]) 
      return film ? (
        <div className="detail">
          <h2>{film.title}</h2>
          <h2>Directed By: {film.director}</h2>
          <h2>Produced By: {film.producer}</h2>
          <p>Episode ID:{film.episode_id}</p>
          <p>{film.opening_crawl}</p>
          <br></br>
          <Link to="/films"> Return to movie list</Link>
        </div>
      ) : <h3>Scanning confidential information...</h3>
      }