import { configureStore } from '@reduxjs/toolkit'
import hotels from './states/hotels.slice'

export default configureStore({
  reducer:{
    hotels
  }
})