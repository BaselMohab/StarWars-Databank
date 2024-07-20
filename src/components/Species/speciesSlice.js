import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import starWarsData from "../../starwarsData";
import notAvailableImg from '../../assets/images/notavailable.jpg'


export const fetchSpeciesDetails = createAsyncThunk('species/fetchSpeciesDetails', 
    async (id) => {
        const response = await axios.get(`https://swapi.dev/api/species/${id}`);
        const species = response.data;

        const films = await Promise.all((species.films || []).filter(Boolean).map(async (filmUrl) => {
            const filmResponse = await axios.get(filmUrl);
            const filmData = filmResponse.data;
            const filmImageURL = starWarsData.films[filmData.title] || notAvailableImg;
            return {
                title: filmData.title,
                imageUrl: filmImageURL
            };
        }));
        
        const people = await Promise.all((species.people || []).filter(Boolean).map(async (personURL) => {
            const personResponse = await axios.get(personURL);
            const personData = personResponse.data;
            const personImageURL = starWarsData.people[personData.name] || notAvailableImg; 
            return {
                name: personData.name,
                imageUrl: personImageURL 
            };
        }));
        
        return { ...species, films, people};
    }
);

const initialState = {
    species: null, 
    error: null,
    loading: false,
};

export const speciesSlice = createSlice({
    name: 'species', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSpeciesDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchSpeciesDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.species = action.payload;
        });
        builder.addCase(fetchSpeciesDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default speciesSlice.reducer;
