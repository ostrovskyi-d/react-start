import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import s from './ProfileStatus.module.scss';
import {Input} from "semantic-ui-react";



const ProfileStatus = (props) => {
        const classes = useStyles();

        const [editMode, setEditMode] = useState(false);
        const [statusText, setStatusText] = useState(props.status);

        useEffect(() => {
            setStatusText(props.status);
        }, [props.status]);
        const onStatusChange = (e) => {
            setStatusText(e.target.value)
        };
        const enableEditMode = () => { 
            setEditMode(true);
        };
        const disableEditMode = (e) => {
                props.updateStatus(statusText);
                setEditMode(false)
        };

        return (<div>
            {editMode
                ? <div className={classes.root}>
                    <FormControl fullWidth className={classes.margin} variant="filled">
                        <Input
                            autoFocus={true}
                            onBlur={disableEditMode}
                            value={statusText}
                            onChange={onStatusChange}
                            placeholder={"Enter your status"}
                        />
                    </FormControl>
                </div>
                : <div style={{whiteSpace: "pre-wrap", display: "flex"}}>
                    <p className={s.statusSpan}
                       onClick={props.statusEditEnabled
                           ? enableEditMode : undefined}>
                        <span>Status:</span>
                        <span  style={{borderTop: "1px solid gray"}}>{props.status}</span>
                    </p>
                </div>
            }
        </div>)
    }
;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "310px",
        // background: "azure",

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
export default ProfileStatus;