

import { combineReducers, createStore } from "redux";


let myExpense = {
    expense:[]
}

function AddExpense(oldData = myExpense , newDAta){

    oldData = {...oldData}

    if(newDAta.type == 'EXPENSE_DATA_GYA'){
        oldData.expense.push(newDAta.payloed)
    }else if(newDAta.type == 'DELET_TRANSECTION'){
        oldData.expense.splice(newDAta.payloed , 1)
    }

    return oldData;

}



let reduser = combineReducers({AddExpense})


export let myStore = createStore(reduser)