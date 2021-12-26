import { createSlice } from "@reduxjs/toolkit";
import {Course }from '../products/Product.slice'
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface cartCourse extends Course {
    amount: number
}




const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as cartCourse[],
    reducers:{
        addToCart:(state, action: PayloadAction<Course>)=>{
            const courseIndex = state.findIndex(course => course.id === action.payload.id)
            if(courseIndex !==-1)
            {
              state[courseIndex].amount+=1
            }
            else{
                state.push({...action.payload, amount: 1})
            }

        },
        removefromCart:(state,action: PayloadAction<string> ) =>{
            const courseIndex = state.findIndex(course => course.id === action.payload)
            if(courseIndex >1){
                state[courseIndex].amount -=1;
            }

            else{
                return state.filter(course =>course.id !== action.payload)
            }

        }
    }
})

export const  getcartCourses = (state: RootState) => state.cart;
export const getTotalPrice = (state: RootState) => state.cart.reduce((acc,next) => acc +=  (next.amount*next.coursePrice),0)
export default cartSlice.reducer;
export const {addToCart, removefromCart} = cartSlice.actions;