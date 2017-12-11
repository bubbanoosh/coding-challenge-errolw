import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
    navLink: {
        textDecoration: 'none',
    }
  });
  
const Navigation = (props) => {
    const { classes } = props;
    return (
        <nav>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" className={classes.navLink}>
                        <Button color="contrast">
                            <Typography type="title" color="inherit" className={classes.flex}>Home</Typography>
                        </Button>
                    </Link>
                    <Link to="/coding-challenge" className={classes.navLink}>
                        <Button color="contrast">
                            <Typography type="title" color="inherit" className={classes.flex}>Coding Challenge</Typography>
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </nav>
    );
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);