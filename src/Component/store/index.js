import { createSlice,configureStore } from "@reduxjs/toolkit";


const initialAuthState = {token:null,isLoggedIn:false}


const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        setToken(state,action){
            state.token = action.payload;
        },

        loggedIn(state){
            state.isLoggedIn=true;
        }
        ,
         loggedOut(state){
          state.isLoggedIn=false;
         }
    }
})

const initialExpenseState = {
    expenses: [],
    isPremium:false
}
const expenseSlice = createSlice({
    name:'expenses',
    initialState:initialExpenseState,
    reducers:{
        addExpense(state,action){
         state.expenses = [action.payload]
         console.log(state.expenses)
        }
,
        setIsPremium(state,action){
         state.isPremium = action.payload;
        } 
    }
})


const store = configureStore({
    reducer: {auth:authSlice.reducer,expense:expenseSlice.reducer}
})


export const authActions = authSlice.actions;
export const expenseActions = expenseSlice.actions;
export default store;