import { configureStore } from "@reduxjs/toolkit";
import personReducer from '../components/People/personSlice';
import planetReducer from '../components/Planets/planetSlice';
import filmReducer from '../components/FilmsList/filmSlice';
import speciesReducer from '../components/Species/speciesSlice';
import starshipReducer from '../components/Starships.jsx/starshipSlice';


export const store = configureStore({
    reducer: {
        person: personReducer,
        planet: planetReducer,
        film: filmReducer,
        species: speciesReducer,
        starship: starshipReducer
    }
})

export default store;