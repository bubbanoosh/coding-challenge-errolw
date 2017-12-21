import AppConfig from '../appConfig/appConfig'
import axios from 'axios'
import * as types from './actionTypes'

export const fetchProducts = (firstPage = '/api/products/1') => {
    (dispatch) => {
        dispatch({
            type: types.FETCH_PRODUCTS_REQUEST,
            productCategory: 'Air Conditioners'
        })
    }

    return dispatch => {
        // dispatch({
        //     type: types.FETCH_PRODUCTS_REQUEST,
        //     productCategory: 'Air Conditioners'
        // })

        get(axios, firstPage, dispatch)
    }

    function get(axios, firstPage, dispatch) {
        function fetch(page, responses) {

            return new Promise((resolve) => {
                axios.get(`${AppConfig.API_ROOT_URL}${page}`).then(response => {

                    responses.push(response);
                    if (response.data.next !== null) {
                        fetch(response.data.next, responses).then(() => resolve());
                    } else {
                        resolve();
                    }
                });
            });
        }
        const responses = [];
        return fetch(firstPage, responses).then(() => {

            const results = responses.map(response => response.data.objects);
            const allResults = [].concat(...results);
            //console.log("allResults.category:", allResults)
            dispatch({
                type: types.FETCH_PRODUCTS_SUCCESS,
                payload: allResults
            })
        });
    }
}

export const setCurrentCategoryAndProducts = (products, productCategory) => {
    return dispatch => {
        dispatch({
            type: types.SET_CURRENT_PRODUCTS_REQUEST
        })

        dispatch({
            type: types.FILTER_PRODUCT,
            payload: productCategory
        })
        //console.log('ppppppwproducts', products)
        getCurrentProducts(products, productCategory, dispatch)
    }

    function getCurrentProducts(products, productCategory, dispatch) {
        let currentProducts = [];

        if (productCategory !== '') {
            if (products.some(p => p.category === productCategory)) {
                currentProducts = products.filter(prod => prod.category === productCategory);
            } else {
                currentProducts = [];
            }
        } else {
            currentProducts = products;
        }

        dispatch({
            type: types.SET_CURRENT_PRODUCTS,
            payload: currentProducts
        })
    }

}

export const setCategoryList = (categories) => {

    return dispatch => {
        dispatch({
            type: types.SET_CATEGORIES,
            payload: categories
        })
    }
}

export const calculateAverage = (currentProducts) => {

    return dispatch => {
        dispatch({
            type: types.CALCULATE_AVERAGE_WEIGHT_REQUESTED
        })

        getAverage(currentProducts, dispatch)
    }

    function getAverage(currentProducts, dispatch) {
        let avg = 0
        if (currentProducts.length > 0) {
            if (currentProducts[0].weight && currentProducts[0].weight !== null) {
                avg = calculateAverageWeight(currentProducts)
            } else {
                avg = 'N/A'
            }
        }
        dispatch({
            type: types.CALCULATE_AVERAGE_WEIGHT,
            payload: avg
        })

    }

    function calculateAverageWeight(currentProducts) {
        let weights = [];
        currentProducts.forEach(c => {
            const size = c.size
            const dimensions = calculateDimensions(size)
            const totalWeight = dimensions * 250
            weights.push(totalWeight)
        });

        if (weights.length > 0) {
            return getAverageWeight(weights)
        }
        return 0;
    }

    function getAverageWeight(weights) {
        let sum = weights.length > 1 ? weights.reduce((previous, current) => current += previous) : (weights[0])
        let avg = sum / weights.length;

        return round(avg, 6)
    }

    function calculateDimensions(size) {
        const w = (size.width / 100)
        const l = (size.length / 100)
        const h = (size.height / 100)
        const cubic = (w * l * h)

        return cubic
    }

    function round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }
}