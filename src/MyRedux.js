import { createStore } from 'redux'

const globalState = {
    loading: false,
    pagePosition: null,
    top: {
        type: 'upcoming',
        page: 1,
        data: []
    },
    schedule: {
        type: 'anjayy',
        page: 1,
        data: []
    },
    genre: {
        type: 'anjayy',
        page: 1,
        data: []
    },
    season: {
        type: 'anjayy',
        page: 1,
        data: []
    }
}

// Reducer
const rootReducer = (state = globalState, action) => {
    if (action.type === 'HANDLE_LOADING') {
        return {
            ...state,
            loading: action.data
        }
    } else if (action.type === 'HANDLE_PAGE_POSITION') {
        return {
            ...state,
            pagePosition: action.data
        }
    } else if (action.type === 'HANDLE_TOP') {
        return {
            ...state,
            top: action.data
        }
    } else if (action.type === 'HANDLE_SCHEDULE') {
        return {
            ...state,
            schedule: action.data
        }
    } else if (action.type === 'HANDLE_GENRE') {
        return {
            ...state,
            genre: action.data
        }
    } else if (action.type === 'HANDLE_SEASON') {
        return {
            ...state,
            season: action.data
        }
    } else {
        return state
    }
}

// Store
const storeRedux = createStore(rootReducer)

export default storeRedux