import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    enrolledCourses:[],
}


const myLearningSlice = createSlice({
    name:'myLearning',
    initialState,
    reducers:{
        enrollCourse : (state, action) =>{
            state.enrolledCourses.push(action.payload)
        }
    }})
export const{enrollCourse} = myLearningSlice.actions
export default myLearningSlice.reducer
