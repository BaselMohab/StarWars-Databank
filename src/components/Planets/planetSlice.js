import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import starWarsData from "../../starwarsData";
import notAvailableImg from '../../assets/images/notavailable.jpg'


export const fetchPlanetDetails = createAsyncThunk('planets/fetchPlanetDetails',
    async (id) => {
        const response = await axios.get(`https://swapi.dev/api/planets/${id}`)
        const planet = response.data
        
        const films = await Promise.all((planet.films || []).filter(Boolean).map(async (filmUrl) => {
            const filmResponse = await axios.get(filmUrl);
            const filmData = filmResponse.data;
            const filmImageURL = starWarsData.films[filmData.title] || notAvailableImg;
            return {
            title: filmData.title,
            imageUrl: filmImageURL 
            };
        }));

        const residents = await Promise.all((planet.residents || []).filter(Boolean).map(async (residentURL) => {
            const residentResponse = await axios.get(residentURL);
            const residentData = residentResponse.data;
            const residentImageURL = starWarsData.people[residentData.name] || notAvailableImg; 
            return {
                name: residentData.name,
                imageUrl: residentImageURL 
            };
        }));

        return {...planet, residents, films}
    }
)


const initialState = {
    planet: null,
    error: null,
    loading: false,
    };

const planetSlice = createSlice({
    name: 'planets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPlanetDetails.pending, (state) => {
        state.loading = true;
        });
        builder.addCase(fetchPlanetDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.planet = action.payload;
        });
        builder.addCase(fetchPlanetDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        });
    },
})

export default planetSlice.reducer;
    