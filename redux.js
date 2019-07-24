const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    value: 0,
    age: 17
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_AGE') {
        return {
            ...state,
            age: state.age + 1
        }
    } else {
        return state
    }
}

// Store
const store = createStore(rootReducer)
console.log(store.getState())

// Subscription
store.subscribe(() => {
    console.log('store change: ', store.getState())

})

// Dispatching Action
store.dispatch({ type: 'ADD_AGE' })
console.log(store.getState())