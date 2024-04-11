import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const hotelsslice = createSlice({
    name: 'hotels',
    initialState: null,
    reducers: {
        setHotels: (state, action) => action.payload
    }
})

export const { setHotels } = hotelsslice.actions;

export default hotelsslice.reducer;

export const getHotelsThunk = url => (dispatch) => {
    axios.get(url)
     .then(res =>  dispatch(setHotels(res.data)))
     .catch(err => console.log(err))

}