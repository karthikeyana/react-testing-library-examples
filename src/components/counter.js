import * as React from 'react'
import {connect} from 'react-redux'
// import { increment,decrement } from '../Actions/counterActions'

const Counter = ({dispatch, count}) => {
    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }
    
    const decrement = () => {
        dispatch({type: 'DECREMENT'})
    }
    
    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span data-testid="count-value">{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

const ConnectedCounter = connect((state) => ({count: state.count}))(Counter)
// const ConnectedCounter = connect(
//     {dispatch:{increment,decrement}},
//     (state) => ({count: state.count})
//     )(Counter)

export {ConnectedCounter}