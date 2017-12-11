import React from 'react';
import AppConfig from '../../appConfig/appConfig'
import kogan from '../../assets/kogan.png'

import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

function getAuthorName() {
    let pckg = require('../../../package.json');
    return pckg.author;
}

const styles = theme => ({
    root: {
        padding: '1.5rem',
    },
    image: {
        width: '300px',
    },
});

const Header = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className="container">
                <h1><img src={kogan} alt={AppConfig.APP_HEADING} className={classes.image} /></h1>
                <Typography type="display2" gutterBottom="true" color="primary">Challenger: {getAuthorName()}</Typography>
            </div>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);