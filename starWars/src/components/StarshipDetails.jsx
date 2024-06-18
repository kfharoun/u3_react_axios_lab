import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ShipDetails(){
    const [starship, setStarship] = useState()
    let {id} = useParams()

    useEffect(()=>{
        const getStarship = async() => {
          const response = await axios.get(`https://swapi.dev/api/starships/`)
          setStarship(response.data.results[id])
        }
        getStarship()
      },[]) 
      return starship ? (
        <div className="detail">
          <h2>{starship.name}</h2>
          <p>Model: {starship.model}</p>
          <p>Cost in Credits: {starship.cost_in_credits}</p>
          <p>Max Passengers: {starship.passengers}</p>
          <p>Length: {starship.length}</p>
          <p>Class: {starship.starship_class}</p>
          <br></br>
          <Link to="/starships"> Return to starship list</Link>
        </div>
      ) : <h3>Scanning confidential information...</h3>
      }
