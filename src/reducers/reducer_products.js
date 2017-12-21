import * as types from '../actions/actionTypes'

const initialState = {
    averageCubicWeight: 0,
    productCategory: 'Air Conditioners',
    currentPageResponse: [],
    currentProducts: [],
    nextPage: '',
    categories: [],
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS_SUCCESS:

            return {
                ...state,
                currentPageResponse: action.payload,
                loading: false
            }
        case types.FETCH_PRODUCTS_REQUEST:

            return {
                ...state,
                productCategory: action.productCategory,
                loading: true
            }
        case types.SET_CURRENT_PRODUCTS_REQUEST:

            return {
                ...state,
                currentProducts: [],
                averageCubicWeight: 0
            }
        case types.SET_CURRENT_PRODUCTS:

            return {
                ...state,
                currentProducts: action.payload
            }
        case types.SET_CATEGORIES:

            return {
                ...state,
                categories: action.payload
            }
        case types.FILTER_PRODUCT:

            return {
                ...state,
                productCategory: action.payload
            }

        case types.CALCULATE_AVERAGE_WEIGHT_REQUESTED:
            return {
                ...state,
                averageCubicWeight: 0
            }

        case types.CALCULATE_AVERAGE_WEIGHT:
            return {
                ...state,
                averageCubicWeight: action.payload
            }

        default:
            return state
    }
}
