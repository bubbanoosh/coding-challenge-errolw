import React, { Component } from 'react'
import _ from 'lodash'
import Product from '../Product'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import Typography from 'material-ui/Typography';

const classes = theme => ({
    container: {
        flexGrow: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 450,
    },
});

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
            <div className={classes.container}>
                <GridList className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <Subheader component="div">
                        <Typography type="headline" gutterBottom="true">Products: {this.props.productCategory}</Typography>
                        </Subheader>
                    </GridListTile>
                    {this.renderListItem(this.props.currentProducts)}
                </GridList>
            </div>)
    }
}

ProductList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(classes)(ProductList)