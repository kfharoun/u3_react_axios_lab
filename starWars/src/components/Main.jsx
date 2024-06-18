import { Route, Routes } from 'react-router-dom'
import StarshipsList from "./StarshipList"
import Home from "./Home"
import FilmList from './FilmList'
import PeopleList from './PeopleList'
import StarshipDetail from './StarshipDetails'
import PeopleDetails from './PeopleDetails'
import FilmDetails from './FilmDetails'

export default function Main () {
    return (
        <div className="routes-container">
    <Routes>
        <Route path="/" element={
                        <Home />
                        }/>
        <Route path="/starships" element={
                                <StarshipsList />}/>
        <Route path="/films" element={
                                <FilmList />}/>
        <Route path="/characters" element={
                                    <PeopleList />}/>
        <Route path="/starships/:id" element={<StarshipDetail/>}/>
        <Route path="/characters/:id" element={<PeopleDetails/>}/>
        <Route path="/films/:id" element={<FilmDetails/>}/>
    </Routes>
        </div>
    )
}