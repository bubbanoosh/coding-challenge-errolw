import reducer_products from '../../src/reducers/reducer_products'
import * as types from '../../src/actions/actionTypes'
import currentPageResponseMock from '../mocks/currentPageResponseMock'
import currentProductsMock from '../mocks/currentProductsMock'
import categoriesMock from '../mocks/categoriesMock'

// https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1

describe('>>>R E D U C E R --- Test reducer_products', () => {
    it('should return the initial state', () => {
        expect(reducer_products(undefined, {})).toEqual(
            {
                averageCubicWeight: 0,
                productCategory: 'Air Conditioners',
                currentPageResponse: [],
                currentProducts: [],
                nextPage: '',
                categories: [],
                loading: false,
            }
        )
    })
    it('should handle FETCH_PRODUCTS_REQUEST', () => {
        expect(
            reducer_products({}, {
                type: types.FETCH_PRODUCTS_REQUEST,
                productCategory: 'Air Conditioners'
            })
        ).toEqual(
            {
                productCategory: 'Air Conditioners',
                loading: true
            }
        )
    })

    it('should handle FETCH_PRODUCTS_SUCCESS', () => {
        expect(
            reducer_products({currentPageResponseMock}, {
                type: types.FETCH_PRODUCTS_SUCCESS
            })
        ).toEqual(
            {
                currentPageResponseMock,
                loading: false
            }
        )
    })
    it('should handle FETCH_PRODUCTS_SUCCESS verbose', () => {
        const currentState =  {
            averageCubicWeight: 0, 
            categories: [], 
            currentPageResponse: [], 
            currentProducts: [], 
            loading: true, 
            nextPage: '', 
            productCategory: 'Air Conditioners' 
        }
        const action = { type: types.FETCH_PRODUCTS_SUCCESS, payload: currentPageResponseMock }
        const state = reducer_products(currentState, action)

        const newState = { 
            ...currentState, 
            currentPageResponse: currentPageResponseMock, 
            loading: false 
        }

        expect(state).toEqual(newState)
    })

    it('should handle SET_CURRENT_PRODUCTS_REQUEST', () => {
        expect(
            reducer_products({}, {
                type: types.SET_CURRENT_PRODUCTS_REQUEST
            })
        ).toEqual(
            {
                currentProducts: [],
                averageCubicWeight: 0
            }
        )
    })
    it('should handle SET_CURRENT_PRODUCTS', () => {
        expect(
            reducer_products({currentProductsMock}, {
                type: types.SET_CURRENT_PRODUCTS
            })
        ).toEqual(
            {
                currentProductsMock
            }
        )
    })
    it('should handle SET_CATEGORIES', () => {
        expect(
            reducer_products({categoriesMock}, {
                type: types.SET_CATEGORIES
            })
        ).toEqual(
            {
                categoriesMock
            }
        )
    })
})