/* Requirement Statement: Create a ReactJS application that manipulates a cash balance on an account using Redux.
    ● This app should contain 4 buttons named:
        ○ Withdraw,
        ○ Deposit,
        ○ Add Interest,
        ○ Charges.
    ● It must also include one input box that you will use to enter the amount that you wish to deposit or withdraw.
    ● Include the space to view your balance as it gets updated.
*/

import Balance from "./components/Balance";

function App() {

  return (
    <Balance />
  );
}

export default App;
