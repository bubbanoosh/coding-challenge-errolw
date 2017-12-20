import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    fetchProducts,
    setCurrentCategoryAndProducts,
    setCategoryList,
    calculateAverage
} from '../../actions'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import { CircularProgress } from 'material-ui/Progress';

import ProductList from './ProductList'
import CategoryFilter from './CategoryFilter'
import WeightIcon from '../../assets/weight.png'

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '1.5rem',
    },
    containerControl: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    chip: {
        margin: theme.spacing.unit * 2,
    },
    button: {
        margin: '1rem',
    },
});

class CodingChallenge extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    onCalculateAverageWeightClick = () => {
        this.props.calculateAverage(this.props.currentProducts);
    }

    render() {
        const { classes } = this.props
        const {
            averageCubicWeight, currentPageResponse, productCategory, currentProducts, categories,
            setCategoryList, setCurrentCategoryAndProducts, loading
        } = this.props
        return (
            <div>
                {loader && <CircularProgress className={classes.progress} size={50} />}

                <Grid container spacing="0" className={classes.root}>
                    {currentPageResponse.length > 0 && <Grid item xs={12}>
                        <Grid container spacing="0" className={classes.containerControl}>
                            <form autoComplete="off">
                                <CategoryFilter
                                    currentPageResponse={currentPageResponse}
                                    selectedCategory={productCategory}
                                    setCategoryList={setCategoryList}
                                    categories={categories}
                                    setCurrentCategoryAndProducts={setCurrentCategoryAndProducts}
                                    currentProducts={currentProducts}
                                />
                            </form>
                        </Grid>
                    </Grid>}
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    raised
                                    color="primary"
                                    className={classes.button}
                                    onClick={this.onCalculateAverageWeightClick}>
                                    Calculate Avg Cubic Weight
                            </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Chip
                                    avatar={<Avatar src={WeightIcon} />}
                                    label={
                                        <Typography type="headline">Average Weight: {averageCubicWeight}</Typography>
                                    }
                                    className={classes.chip}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.card}>
                            <CardContent>
                                {currentPageResponse.length > 0 &&
                                    <ProductList
                                        currentPageResponse={currentPageResponse}
                                        productCategory={productCategory}
                                        setCurrentCategoryAndProducts={setCurrentCategoryAndProducts}
                                        currentProducts={currentProducts} />
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

CodingChallenge.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    averageCubicWeight: state.products.averageCubicWeight,
    currentPageResponse: state.products.currentPageResponse,
    productCategory: state.products.productCategory,
    currentProducts: state.products.currentProducts,
    categories: state.products.categories,
    loading: state.products.loading
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts,
    setCurrentCategoryAndProducts,
    setCategoryList,
    calculateAverage
}, dispatch)

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(CodingChallenge))