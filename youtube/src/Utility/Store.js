import {configureStore} from  '@reduxjs/toolkit'
import Appslice from './AppSlice';

const store=configureStore({
 reducer :{
    app:Appslice,
 },
})

export default store;