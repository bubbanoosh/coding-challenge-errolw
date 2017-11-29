import React, { Component } from 'react'
import _ from 'lodash'
import Product from '../Product'

class ProductList extends Component {

    componentWillMount() {
        this.handleSetCurrentProducts(this.props.currentPageResponse, this.props.productCategory, this.props.setCurrentProducts);
    }

    handleSetCurrentProducts(products, productCategory, setCurrentProducts) {
        this.props.setCurrentCategoryAndProducts(products, productCategory);
    }

    renderListItem(products) {
        if (products.length > 0) {
            return _.map(products, p => {
                return (
                    <Product
                        key={this.getRandomKey()}
                        product={p} />
                );
            });
        }

        return <div className="col-md-4">No products found...</div>
    }

    getRandomKey() {
        return _.random(1, 1000000);
    }

    render() {
        return (
            <div>
                {this.renderListItem(this.props.currentProducts)}
            </div>)
    }
}

export default ProductList