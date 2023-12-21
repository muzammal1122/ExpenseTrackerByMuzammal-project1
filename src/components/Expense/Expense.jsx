
import { useDispatch, useSelector } from 'react-redux'
import './expense.css'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Expense() {

    let dispatch = useDispatch();

    let { register, handleSubmit  , formState:{errors}} = useForm();

    let myExpenseData = useSelector(function (store) {
        return store.AddExpense
    })

    const onExpense = (expenseData) => {
        // console.log(expenseData);

        dispatch({
            type: 'EXPENSE_DATA_GYA',
            payloed: expenseData
        })

    }


    function InCome() {
        let income = 0;

        {
            myExpenseData.expense.map(function (a) {
                // console.log(a.price);
                if (a.price > 1) {
                    income += +a.price
                }
            })
        }

        return income;

    }
    // inCome()

    function Expense() {
        let expense = 0;

        {
            myExpenseData.expense.map(function (a) {
                // console.log(a.price);
                if (a.price < 1) {
                    expense += +a.price
                }
            })
        }

        return expense;

    }

    let income = InCome();

    let expense = Math.abs(Expense())


    return (
        <div>
            <div className="main-Expense-Div">
                <h2 className="Expen-tracker-heading">
                    Expense Tracker By Amjad
                </h2>
                <div className="current-balence-main-div">
                    <b>
                        <span className='current-balence-span'>Current Balence</span>
                    </b>
                    <br />
                    <span>$ {income - expense}</span>
                </div>
                <br />
                <div className="main-div-expense-income-box">
                    <div className="income">
                        <b>
                            <span>Income</span>
                        </b>

                        <br />
                        <span>$ {income}</span>
                    </div>
                    <div className="expense-income-under-div">

                    </div>
                    <div className="expense">
                        <b>
                            <span>Expense</span>
                        </b>
                        <br />
                        <span>$ {expense}</span>
                    </div>
                </div>

                <h3 className="histroy">
                    History
                </h3>
                <hr />

                {
                    myExpenseData.expense.map(function (data , myIndex) {
                        return <div>

                            <div className="transection-history">
                                <div className="items">
                                    <button className='delet-btn' onClick={function(){
                                        dispatch({
                                            type:'DELET_TRANSECTION',
                                            payloed:myIndex
                                        })
                                    }}>X</button>


                                    <span className='items-span'>{data.items}</span>
                                </div>
                                <div className="prices">
                                    <span className='prices-span'>$ {data.price}</span>
                                </div>
                            </div>

                        </div>

                    })
                }
                <h3>Add New Transecstion</h3>
                <hr />
                <div className="add-new-transection-histroy-main-div">
                    <form onSubmit={handleSubmit(onExpense)}>
                        <div>
                            <label>
                                Enter Description
                            </label>
                            <input {...register('items' , {required:true})} className='add-new-wala-input' type="text" />

                        </div>
                        <div>
                            {/* <br /> */}
                            <label>
                                Enter Price
                            </label>
                            <input {...register('price' ,  {required:true})} className='add-new-wala-input' type="number" />
                        </div>
                        <div>
                            <input className='add-new-wala-input btn' value={'Submit'} type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
