import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import starWarsData from "../../starwarsData";
import notAvailableImg from '../../assets/images/notavailable.jpg'


export const fetchPersonDetails = createAsyncThunk('person/fetchPersonDetails', 
async (id) => {
            const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
            const person = response.data;

    //the boolean is to make sure the property is an array, if not it defaults to an empty array
const films = await Promise.all((person.films || []).filter(Boolean).map(async (filmUrl) => {
    const filmResponse = await axios.get(filmUrl);
    const filmData = filmResponse.data;
    const filmImageURL = starWarsData.films[filmData.title] || notAvailableImg;
    return {
    title: filmData.title,
    imageUrl: filmImageURL 
    };
}));


const starships = await Promise.all((person.starships || []).filter(Boolean).map(async (starshipURL) => {
    const starshipResponse = await axios.get(starshipURL);
    const starshipData = starshipResponse.data;
    const starshipImageURL = starWarsData.starships[starshipData.name] || notAvailableImg;
    return {
        name: starshipData.name,
        imageUrl: starshipImageURL
    };
}));

const species = await Promise.all((person.species || []).filter(Boolean).map(async (speciesURL) => {
    const speciesResponse = await axios.get(speciesURL);
    const speciesData = speciesResponse.data;
    const speciesImageURL = starWarsData.species[speciesData.name] || notAvailableImg;
    return {
        name: speciesData.name,
        imageUrl: speciesImageURL
    };
}));

let planet = null;
    if (person.homeworld) {
        const planetResponse = await axios.get(person.homeworld);
        const planetData = planetResponse.data;
        const planetImageURL = starWarsData.planets[planetData.name] || notAvailableImg; 
        planet = {
            name: planetData.name,
            imageUrl: planetImageURL
        };
    }

return { ...person, films, starships, species, planet };
});

const initialState = {
person: null,
error: null,
loading: false,
};

const personSlice = createSlice({
name: 'person',
initialState,
reducers: {},
extraReducers: (builder) => {
    builder.addCase(fetchPersonDetails.pending, (state) => {
    state.loading = true;
    });
    builder.addCase(fetchPersonDetails.fulfilled, (state, action) => {
    state.loading = false;
    state.person = action.payload;
    });
    builder.addCase(fetchPersonDetails.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
    });
},
});

export default personSlice.reducer;
