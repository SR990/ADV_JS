import {configureStore} from '@reduxjs/toolkit'
import myLearningSlice from './myLearningSlice'

const store = configureStore({
    name: 'myLearning',
    reducer:{
        myLearning: myLearningSlice,
    }
})

export default store