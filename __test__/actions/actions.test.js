import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import expect from 'expect'
import * as actions from '../../src/actions'
import * as types from '../../src/actions/actionTypes'

import currentPageResponseMock from '../mocks/currentPageResponseMock'
import currentProductsMock from '../mocks/currentProductsMock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('>>>A C T I O N --- AXIOS - productActions actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates FETCH_PRODUCTS_SUCCESS after successfuly fetching products', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: currentPageResponseMock,
            });
        });

        const expectedActions = [
            { type: types.FETCH_PRODUCTS_REQUEST, productCategory: 'Air Conditioners' },
            { type: types.FETCH_PRODUCTS_SUCCESS, payload: currentPageResponseMock },
        ];

        const store = mockStore({ payload: [] })

        return store.dispatch(actions.fetchProducts()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('>>>A C T I O N --- productActions actions', () => {

    it('SUCCEEDS execution setCurrentCategoryAndProducts()', () => {

        const category = 'Air Conditioners'
        const expectedActions = [
            { type: types.SET_CURRENT_PRODUCTS_REQUEST },
            { type: types.FILTER_PRODUCT, payload: category },
            { type: types.SET_CURRENT_PRODUCTS, payload: currentProductsMock },
        ];

        const store = mockStore({ payload: [] })
        store.dispatch(actions.setCurrentCategoryAndProducts(currentPageResponseMock, category))

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('FAILS!! on invalid category setCurrentCategoryAndProducts()', () => {

        const category = 'Air Conditioners'
        const invalidCategory = 'Shit'
        const expectedActions = [
            { type: types.SET_CURRENT_PRODUCTS_REQUEST },
            { type: types.FILTER_PRODUCT, payload: category },
            { type: types.SET_CURRENT_PRODUCTS, payload: currentProductsMock },
        ];

        const store = mockStore({ payload: [] })
        store.dispatch(actions.setCurrentCategoryAndProducts(currentPageResponseMock, invalidCategory))

        expect(store.getActions()).not.toEqual(expectedActions);
    });
});

  // https://medium.com/@netxm/test-async-redux-actions-jest-e703add2cf91