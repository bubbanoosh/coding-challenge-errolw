import React, { Component } from 'react'
import _ from 'lodash'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        marginLeft: theme.spacing.unit * 2,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class CategoryFilter extends Component {

    componentWillMount() {
        this.handleSetCategoryList(this.props.currentPageResponse, this.props.setCategoryList);
    }

    handleSetCategoryList(products, setCategoryList) {
        let cats = products.map(c => c.category);
        let all = _.uniq(_.map(cats)).sort()
        setCategoryList(all);
    }

    onSelect = (event) => {
        this.props.setCurrentCategoryAndProducts(this.props.currentPageResponse, event.target.value)
    }

    renderCategories(categories, selectedCategory) {
        if (categories.length > 0) {
            return _.map(categories, c => {
                return (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                );
            });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="categories">Category</InputLabel>
                <Select
                    value={this.props.selectedCategory}
                    onChange={this.onSelect}
                    input={<Input name="categories" id="categories" />}
                >
                    {this.renderCategories(this.props.categories, this.props.selectedCategory)}
                </Select>
            </FormControl>
        )

    }
}

CategoryFilter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryFilter)