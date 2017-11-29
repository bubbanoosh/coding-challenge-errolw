import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    fetchProducts,
    setCurrentCategoryAndProducts,
    setCategoryList,
    calculateAverage
} from '../../modules/products'

import ProductList from './ProductList'
import CategoryFilter from './CategoryFilter'

const styles = {
    extraMarginBottom: { marginBottom: '1rem' }
}

class CodingChallenge extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    onCalculateAverageWeightClick() {
        this.props.calculateAverage(this.props.currentProducts);
    }


    render() {
        return (
            <div className="container">
                {this.props.currentPageResponse.length > 0 && <div className="row">
                    <div className="col-md-12" style={ styles.extraMarginBottom }>
                        <CategoryFilter
                            currentPageResponse={this.props.currentPageResponse}
                            selectedCategory={this.props.productCategory}
                            setCategoryList={this.props.setCategoryList}
                            categories={this.props.categories}
                            setCurrentCategoryAndProducts={this.props.setCurrentCategoryAndProducts}
                            currentProducts={this.props.currentProducts}
                        />
                    </div>
                </div>}
                <div className="row">
                    <div className="col-md-12">
                        <h1>Products: {this.props.productCategory}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" style={ styles.extraMarginBottom }>
                        <div className="col-md-6 text-left">
                            <button
                                className="btn btn-success pull-md-left"
                                onClick={this.onCalculateAverageWeightClick.bind(this)}>
                                Calculate Avg Cubic Weight
                            </button>
                        </div>
                        <div className="col-md-6">
                            <div className="pull-xs-left"><h3>Average Weight: <span className="label label-default">{this.props.averageCubicWeight}</span></h3></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card sb-card col-md-12">
                        <div className="card-body">
                            {this.props.currentPageResponse.length > 0 &&
                                <ProductList
                                    currentPageResponse={this.props.currentPageResponse}
                                    productCategory={this.props.productCategory}
                                    setCurrentCategoryAndProducts={this.props.setCurrentCategoryAndProducts}
                                    currentProducts={this.props.currentProducts} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    averageCubicWeight: state.products.averageCubicWeight,
    currentPageResponse: state.products.currentPageResponse,
    productCategory: state.products.productCategory,
    currentProducts: state.products.currentProducts,
    categories: state.products.categories
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts,
    setCurrentCategoryAndProducts,
    setCategoryList,
    calculateAverage
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CodingChallenge)