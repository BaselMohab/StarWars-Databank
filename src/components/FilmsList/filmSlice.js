import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import starWarsData from "../../starwarsData";
import notAvailableImg from '../../assets/images/notavailable.jpg'


export const fetchFilmDetails = createAsyncThunk('films/fetchFilmDetails', 
    async (id) => {
        const response = await axios.get (`https://swapi.dev/api/films/${id}/`)
        const film = response.data

const characters = await Promise.all((film.characters || []).filter(Boolean).map(async (characterURL) => {
    const characterResponse = await axios.get(characterURL);
    const characterData = characterResponse.data;
    const characterImageURL = starWarsData.people[characterData.name] || notAvailableImg;
    return {
        name: characterData.name,
        imageUrl: characterImageURL 
    };
}));

const planets = await Promise.all((film.planets || []).filter(Boolean).map(async (planetURL) => {
    const planetResponse = await axios.get(planetURL);
    const planetData = planetResponse.data;
    const planetImageURL = starWarsData.planets[planetData.name] || notAvailableImg; 
    console.log(`Fetched planet: ${planetData.name}, Image URL: ${planetImageURL}`);
    return {
        name: planetData.name,
        imageUrl: planetImageURL
    };
}));

const starships = await Promise.all((film.starships || []).filter(Boolean).map(async (starshipURL) => {
    const starshipResponse = await axios.get(starshipURL);
    const starshipData = starshipResponse.data;
    const starshipImageURL = starWarsData.starships[starshipData.name] || notAvailableImg; 
    return {
        name: starshipData.name,
        imageUrl: starshipImageURL
    };
}));

const species = await Promise.all((film.species || []).filter(Boolean).map(async (speciesURL) => {
    const speciesResponse = await axios.get(speciesURL);
    const speciesData = speciesResponse.data;
    const speciesImageURL = starWarsData.species[speciesData.name] || notAvailableImg; 
    return {
        name: speciesData.name,
        imageUrl: speciesImageURL
    };
}));

    return {...film, species, characters, planets, starships} 
})

const initialState = {
    film: null,
    error: null,
    loading: false,
    };

export const filmSlice = createSlice({
    name: 'film',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilmDetails.pending, (state) => {
        state.loading = true;
        });
        builder.addCase(fetchFilmDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.film = action.payload;
        });
        builder.addCase(fetchFilmDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        });
    },
}) 

export default filmSlice.reducer