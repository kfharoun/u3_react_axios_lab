import { Route, Routes } from 'react-router-dom'
import StarshipsList from "./StarshipList"
import Home from "./Home"
import FilmList from './FilmList'
import PeopleList from './PeopleList'

export default function Main () {
    return (
        <div className="routes-container">
    <Routes>
        <Route path="/" element={
                        <Home />
                        }/>
        <Route path="/starships" element={
                                <StarshipsList />
                        }/>
        <Route path="/films" element={
                                <FilmList />
                                }/>
        <Route path="/characters" element={
                                    <PeopleList />
                                    }/>
    </Routes>
        </div>
    )
}