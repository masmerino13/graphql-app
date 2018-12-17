import React from 'react'
import MedicineList from './MedicineList'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

const Medicines = ({ classes, medicines }) => {
    const gridJustify = 'flex-end';
    console.log('medicines', medicines);

    return (
        <Grid container spacing={16} justify={gridJustify}>
            <Grid container item xs={12} md={12} justify={gridJustify}>
                <Link href="/add">
                    <Button variant="contained" color="primary">
                        Nuevo <AddIcon />
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} md={12}>
                <MedicineList />
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Medicines)
