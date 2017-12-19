import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import expect from 'expect'
import * as actions from '../src/actions'
import currentProductsMock from './mocks/currentProductsMock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('productActions actions', () => {

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
        response: currentProductsMock,
      });
    });

    const expectedActions = [
      { type: actions.FETCH_PRODUCTS_REQUEST, productCategory: 'Air Conditioners' },
      { type: actions.FETCH_PRODUCTS_SUCCESS, payload: currentProductsMock },
    ];

    console.log('currentProductsMock: ', currentProductsMock)

    const store = mockStore({ payload: [] })

    return store.dispatch(actions.fetchProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

// https://medium.com/@netxm/test-async-redux-actions-jest-e703add2cf91