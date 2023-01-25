/* Requirement Statement:
    ● The store will store the current balance of the account.
    ● If the Deposit button is clicked, the balance amount should increase by the input value from the input box.
    ● If the Withdraw button is clicked, the balance amount should decrease by the input value from the input box.
    ● If the Add Interest button is clicked, the balance amount should increase by 5%.
    ● If the Charges button is clicked, the balance amount should decrease by 15%.
*/

import { createSlice } from "@reduxjs/toolkit"

// accountSlice - is the name of the slice of state that we will implement in our store.
export const accountSlice = createSlice({
    name: 'account',
    // the initial state for the slice of state. Added interest and charges also, as we may need to change them in future.
    initialState: {
        'balance': 0,
        'interest': 5,
        'charges': 15,
    },
    // The reducer to manipulate the initial state or current state.
    reducers: {
        // deposit and withdraw would require user input, which is passed as action payload.
        deposit: (state, action) => {
            state.balance += action.payload
        },

        withdraw: (state, action) => {
            state.balance -= action.payload
        },

        addInterest: (state) => {
            // taking care of the negative amount
            state.balance < 0 ? state.balance *= (1 - (state.interest / 100)) : state.balance *= (1 + (state.interest / 100))
        },

        charges: (state) => {
            // taking care of the negative amount
            state.balance < 0 ? state.balance *= (1 + (state.charges / 100)) : state.balance *= (1 - (state.charges / 100))
        },

    },
})

// Generating action creators for each case reducer function.
export const { deposit, withdraw, addInterest, charges } = accountSlice.actions

// Exporting the reducer function that will be implemented in the 'store'.
export default accountSlice.reducer