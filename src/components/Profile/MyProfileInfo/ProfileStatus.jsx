import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import s from './ProfileStatus.module.scss';
import {OutlinedInput} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "310px",
        background: "azure",

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
    padding: {
        padding: "1em"

    }
}));

const ProfileStatus = (props) => {
        const classes = useStyles();
        const [label, setLabel] = useState("Status");
        const [editMode, setEditMode] = useState(false);
        const [statusValue, setStatusValue] = useState(props.status);

        useEffect(() => {
            setStatusValue((prevState) => {
                    return props.status
            });
        }, [props.status]);
        const onStatusChange = (e) => {
            setStatusValue(e.target.value)
        };
        const enableEditMode = () => {
            setEditMode(true);
        };
        const disableEditMode = (e) => {
            if (e.currentTarget.value) {
                props.updateStatus(statusValue);
                setEditMode(false)
            } else {
                setLabel("Empty status not working yet")
            }
        };

        return (<div>
            {editMode
                ? <div className={classes.root}>
                    <FormControl fullWidth className={classes.margin} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">{label}</InputLabel>
                        <OutlinedInput
                            autoFocus={true}
                            onBlur={disableEditMode}
                            id="filled-adornment-amount"
                            value={statusValue}
                            onChange={onStatusChange}
                            placeholder={"Enter your status"}
                            // onKeyDown={}
                        />
                    </FormControl>
                </div>
                : <div style={{whiteSpace: "pre-wrap", display: "flex"}}>
                    <p className={s.statusSpan}
                       onClick={props.statusEditEnabled
                           ? enableEditMode
                           : false}>
                        <span>Status:</span>
                        <span>{props.status}</span>
                    </p>
                </div>
            }
        </div>)
    }
;

export default ProfileStatus;