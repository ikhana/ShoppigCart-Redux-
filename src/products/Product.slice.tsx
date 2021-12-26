import {  createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import validateCourse from "../fake.api";
import { RootState } from "../store";

export  interface Course {
    title: string,
    teacher: string,
    durationInMonths: string,
    id: string,
    coursePrice: number
    
}
export enum validationState {
    FUlfilled,
    Pending,
    Rejected
}

interface courseSliceState {
    courses: Course[],
    validationState?: validationState,
    ErrorMessage?: string
}

export const addCourseAsync = createAsyncThunk('courses/addNewCourses',async (initialCourse: Course) => {

    const course = await validateCourse(initialCourse)
    return course

    
})
 const initialCourses: Course[] = [
    {title:"Blockchain", teacher:"Zeeshan Hanif", durationInMonths: "12",coursePrice:3000, id: "bcc"},
    {title:"Artificial Inteligence", teacher:"Inaam ul Haq", durationInMonths: "12", coursePrice:6000, id: "AI"},
    {title:"Cloud Computing", teacher:"Mohsin Khalid", durationInMonths: "12", coursePrice:8000, id: "CC"},
    {title:"Internet Of Things", teacher:"Zia Khan", durationInMonths:" 18", coursePrice:12000, id: "IoT"},
]

const initialState: courseSliceState ={
    courses: initialCourses,
    validationState: undefined,
    ErrorMessage: undefined
}
 

const courseSlice = createSlice ({
    name: 'courses',
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<Course>) =>{
            //return [action.payload, ...state]
            state.courses.push(action.payload)
        },
        removeCourse: (state, action: PayloadAction<string>) =>({
          
            ...state,
            courses:state.courses.filter(course => course.id !== action.payload)

        })
        
    },
    extraReducers: builder =>{
        builder.addCase(addCourseAsync.fulfilled, (state, action)=>({
         ...state,
         validationState: validationState.FUlfilled,
         ErrorMessage: undefined,
         courses: [...state.courses, action.payload]
        })) 
        builder.addCase(addCourseAsync.rejected, (state, action) =>({
        ...state,
        validationState: validationState.Rejected,
        ErrorMessage: action.error.message
        
        }))
        builder.addCase(addCourseAsync.pending, (state, action) =>({
            ...state,
            validationState: validationState.Pending,
            ErrorMessage: undefined


        }))
    
    }
   
})
export const {addCourse,removeCourse} = courseSlice.actions;
export const getCoursesSelector = (state: RootState) => state.courses.courses;
export const getErrorMessage = (state: RootState) => state.courses.ErrorMessage;
export default courseSlice.reducer;