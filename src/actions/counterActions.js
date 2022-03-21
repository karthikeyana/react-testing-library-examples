

const increment = () => {
    dispatch({type: 'INCREMENT'})
}

const decrement = () => {
    dispatch({type: 'DECREMENT'})
}


export {increment,decrement}