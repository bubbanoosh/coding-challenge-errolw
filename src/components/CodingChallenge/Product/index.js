import React from 'react'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    paper: {
        height: 250,
        width: 250,
        padding: theme.spacing.unit * 2,
        marginTop: 0,
        marginBottom: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    }
});

const Product = props => (
    <Grid key={props.product.title} item>
        <Paper className={props.classes.paper}>
            <ul>
                <li>{props.product.category}</li>
                <li>{props.product.title}</li>
                {props.product.weight && props.product.weight !== null && <li>
                    Weight: {props.product.weight}
                    {props.product.size && <ul>
                        <li>Width: {props.product.size.width}</li>
                        <li>Length: {props.product.size.length}</li>
                        <li>Height: {props.product.size.height}</li>
                    </ul>}
                </li>}

            </ul>
        </Paper>
    </Grid>
)

export default withStyles(styles)(Product);
