import { createSlice,configureStore } from "@reduxjs/toolkit";


const initialAuthState = {token:null,isLoggedIn:false}


const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        setToken(state,action){
            state.token = action.payload;
        },

        loggedIn(state,action){
            state.isLoggedIn= action.payload;
        }
        ,
         loggedOut(state){
          state.isLoggedIn=false;
         }
    }
})

const initialExpenseState = {
    expenses: [],

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
    }
})

const initialPremium={
    isPremium: false,
    showButton:true,
    theme: 'false'

}

const premiumSlice = createSlice({

    name:'premium',
    initialState:initialPremium,
    reducers:{
        setIsPremium(state,action){
            state.isPremium=action.payload;
        },
        showBuyButton(state,action){
        state.showButton = action.payload
        }
        ,

        changeTheme(state){
         state.theme = !state.theme;
        }
    }

})


const store = configureStore({
    reducer: {auth:authSlice.reducer,expense:expenseSlice.reducer, premium:premiumSlice.reducer}
})


export const authActions = authSlice.actions;
export const expenseActions = expenseSlice.actions;
export const premiumActions = premiumSlice.actions;
export default store;