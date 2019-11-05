import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: 200,
    },
}));

export default function InputAdornments() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
    });

    const handleChange = prop => event => {
        setValues({...values, [prop]: event.target.value});
    };

    return (
        <div className={classes.root}>
            <FormControl fullWidth className={classes.margin} variant="filled">
                <InputLabel htmlFor="filled-adornment-amount">Status</InputLabel>
                <FilledInput
                    autoFocus={true}
                    id="filled-adornment-amount"
                    onChange={handleChange('amount')}
                />
            </FormControl>
        </div>
    );
}
