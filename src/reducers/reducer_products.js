import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_REQUEST,
    SET_CURRENT_PRODUCTS_REQUEST,
    SET_CURRENT_PRODUCTS,
    SET_CATEGORIES,
    FILTER_PRODUCT,
    CALCULATE_AVERAGE_WEIGHT_REQUESTED,
    CALCULATE_AVERAGE_WEIGHT
} from '../actions'

const initialState = {
    averageCubicWeight: 0,
    productCategory: 'Air Conditioners',
    currentPageResponse: [],
    currentProducts: [],
    nextPage: '',
    categories: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:

            return {
                ...state,
                currentPageResponse: action.payload
            }
        case FETCH_PRODUCTS_REQUEST:

            return {
                ...state,
                productCategory: action.productCategory
            }
        case SET_CURRENT_PRODUCTS_REQUEST:

            return {
                ...state,
                currentProducts: [],
                averageCubicWeight: 0
            }
        case SET_CURRENT_PRODUCTS:

            return {
                ...state,
                currentProducts: action.payload
            }
        case SET_CATEGORIES:

            return {
                ...state,
                categories: action.payload
            }
        case FILTER_PRODUCT:

            return {
                ...state,
                productCategory: action.payload
            }

        case CALCULATE_AVERAGE_WEIGHT_REQUESTED:
            return {
                ...state,
                averageCubicWeight: 0
            }

        case CALCULATE_AVERAGE_WEIGHT:
            return {
                ...state,
                averageCubicWeight: action.payload
            }

        default:
            return state
    }
}
