    import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
    import axios from "axios";
    import starWarsData from '../../starwarsData';
    import notAvailableImg from '../../assets/images/notavailable.jpg'


    export const fetchStarshipDetails = createAsyncThunk('starships/fetchStarshipDetails',
    async (id) => {
    const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
    const starship = response.data;

    const films = await Promise.all((starship.films || []).filter(Boolean).map(async (filmUrl) => {
        const filmResponse = await axios.get(filmUrl);
        const filmData = filmResponse.data;
        const filmImageURL = starWarsData.films[filmData.title] || notAvailableImg;
        return {
        title: filmData.title,
        imageUrl: filmImageURL 
        };
    }));

    return { ...starship, films };
    }
    );

    const initialState = {
    starship: null,
    error: null,
    loading: false,
    };

    export const starshipSlice = createSlice({
    name: 'starship',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(fetchStarshipDetails.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(fetchStarshipDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.starship = action.payload;
    });
    builder.addCase(fetchStarshipDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });
    },
    });

    export default starshipSlice.reducer;
