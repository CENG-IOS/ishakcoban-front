import { configureStore } from "@reduxjs/toolkit";
import PopupReducer from "./slices/Popup";


const store = configureStore({
    reducer:{popup :PopupReducer.reducer} 
})

export default store;