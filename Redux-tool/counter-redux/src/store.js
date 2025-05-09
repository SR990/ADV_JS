import {configureStore} from '@reduxjs/toolkit';
import CounterSlice from './CounterSlice';
import prefsReducer from './prefSlic';


const store= configureStore({
    reducer:{
        counter:CounterSlice,
        prefs: prefsReducer,


    }
})

export default store