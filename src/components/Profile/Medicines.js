import React from 'react'
import MedicineList from './MedicineList'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

const Medicines = ({ classes }) => {
    const gridJustify = 'flex-end';

    return (
        <Grid container spacing={16} justify={gridJustify}>
            <Grid container item xs={12} md={12} justify={gridJustify}>
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Grid>
            <Grid item xs={12} md={12}>
                <MedicineList />
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Medicines)
