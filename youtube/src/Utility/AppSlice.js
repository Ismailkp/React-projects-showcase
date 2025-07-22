
import {createSlice} from '@reduxjs/toolkit'

const Appslice=createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
     toggleMenu:(state)=>{
        state.isMenuOpen=!state.isMenuOpen;
     },
     CloseMenu:(state)=>{
        state.isMenuOpen=false;
     },
    },

 })

 
export const {toggleMenu,CloseMenu}=Appslice.actions;
 export default Appslice.reducer;