// import React from 'react'
// import { shallow, mount } from 'enzyme'
// import renderer from 'react-test-renderer'

// import reducer_products from '../src/reducers/reducer_products'
// import currentProductsMock from './mocks/currentProductsMock'

// describe('>>>R E D U C E R --- Test reducer_products', () => {
//     it('+++ reducer for FETCH_PRODUCTS_REQUEST', () => {
//         let state = { productCategory: 'Air Conditioners' }
//         state = reducer_products( state, { type:'products/FETCH_PRODUCTS_REQUEST', productCategory: 'Air Conditioners'})
//         expect(state).toEqual({productCategory: 'Air Conditioners'})
//     })
//     it('+++ reducer for FETCH_PRODUCTS_SUCCESS', () => {
//         let state = { currentPageResponse: [] }
//         state = reducer_products( state, { type:'products/FETCH_PRODUCTS_SUCCESS', currentPageResponse: currentProductsMock})
//         expect(state).toEqual({currentPageResponse: currentProductsMock})
//     })
// })

// https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1