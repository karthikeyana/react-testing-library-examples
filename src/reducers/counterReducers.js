const initialReducerState = {
    count: 0,
  }
  
  const reducer = (state = initialReducerState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1,
        }
      case 'DECREMENT':
        return {
          count: state.count - 1,
        }
      default:
        return state
    }
}

export {initialReducerState,reducer}