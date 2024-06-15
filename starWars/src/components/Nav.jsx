import { Link } from "react-router-dom";
import '../App'

export default function Nav() {
    return (
        <div className="Nav">
            <Link to="/" >
                <h2>Home</h2>
            </Link>

            <Link to="/starships">
                <h2>Starships</h2>
            </Link>

            <Link to ="/films">
                <h2>Films</h2>
            </Link>

            <Link to ="/characters">
                <h2>Characters</h2>
            </Link>
        </div>
    )
}