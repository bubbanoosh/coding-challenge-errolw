import React from 'react'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '1.5rem',
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },

});


const Home = (props) => {
    const { classes } = props;
    return (
        <Grid container spacing="0" className={classes.root}>
            <Paper className={classes.root}>
                <Typography type="display1" gutterBottom="true" color="secondary">Challenge Description</Typography>
                <p>Using the provided (paginated) API, find the average cubic weight for all products in the "Air Conditioners" category.</p>

                <p>Cubic weight is calculated by multiplying the length, height and width of the parcel. The result is then multiplied by the industry standard cubic weight conversion factor of 250.</p>

                <Typography type="display1" gutterBottom="true" color="secondary">API Endpoint</Typography>

                <p>http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1</p>

                <Typography type="display1" gutterBottom="true" color="secondary">Cubic Weight Example</Typography>
                
                <p>A parcel measuring 40cm long (0.4m) x 20cm high (0.2m) x 30cm wide (0.3m) is equal to 0.024 cubic metres.
        Multiplied by the conversion factor of 250 gives a cubic weight of 6kg.</p>

                <div>0.4m x 0.2m x 0.3m = 0.024m3<br />
                    0.024m3 x 250 = 6kg<br />
                    Assume that</div>

                <ul>
                    <li>All dimensions are provided in centimetres</li>
                    <li>All weights are provided in grams</li>
                </ul>

                <Typography type="display1" gutterBottom="true" color="secondary">Submission</Typography>

                <ul>
                    <li>You must submit setup instructions with your solution, and specify language used eg: Language: Javascript</li>
                    <li>Zip/tarball up your whole challenge working directory with your source code and any other files you feel are necessary</li>
                    <li>Reply to dev.jobs@kogan.com with your solution attached by Sun, 19 Nov 2017 23:59:59 +1100</li>
                </ul>
            </Paper>
        </Grid>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);