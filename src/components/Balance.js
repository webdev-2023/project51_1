// component to display the Cash Balance

// Importing the useSelector and useDispatch functions to select the required slices of state.
// Importing the useState hook to capture the input in the form.
// Importing the action creators implemented in the account reducer.
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addInterest, charges, deposit, withdraw } from "../features/accountSlice";

const Balance = () => {
    const { balance } = useSelector((state) => state.account)       // slice of the state (coming from store)
    const dispatch = useDispatch()
    const [userInput, setUserInput] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserInput(0)
    }
    return <div className='container'>
        <div className='container-ele'>
            <h1>Cash Balance</h1>
            <h3>Balance: {balance.toFixed(2)}</h3>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='form-fld'>
                <div className='container-ele'>
                    <label>Amount:</label>
                    <input className='input' type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                </div>
                <div >
                    {/* sending the user input to the reducer (in accountSlice.js) */}
                    <button className='btn' onClick={() => dispatch(deposit(Number(userInput)))}>Deposite</button>
                    <button className='btn' onClick={() => dispatch(withdraw(Number(userInput)))}>Withdraw</button>
                </div>
                <button className='btn' onClick={() => dispatch(addInterest())}>Add Interest</button>
                <button className='btn' onClick={() => dispatch(charges())}>Charges</button>
            </div>
        </form>
    </div >
};

export default Balance;
