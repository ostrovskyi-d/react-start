import React, {useState} from "react";
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
    padding: {
        padding: "1em"

    }
}));


const ProfileStatus = (props) => {
    const classes = useStyles();
    const [label, setLabel] = useState("Status");
    const [editMode, setEditMode] = useState(false);
    const [statusValue, setStatusValue] = useState(props.status);

    const onChange = (e) => {
        setStatusValue(e.target.value)
    };

    const disableEditMode = (e) => {
        if (e.target.value) {
            setLabel("Status");
            setEditMode(false);
        } else {
            setLabel("Empty status not allowed");
        }
    };

    const enableEditMode = () => {
        setEditMode(true);
    };

    return (<div>
        {editMode
            ? <div className={classes.root}>
                <FormControl fullWidth className={classes.margin} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">{label}</InputLabel>
                    <FilledInput
                        autoFocus={true}
                        onBlur={disableEditMode}
                        id="filled-adornment-amount"
                        value={statusValue}
                        onChange={onChange}
                        placeholder={"Enter your status"}
                    />
                </FormControl>
            </div>
            : <div style={{margin: "1em 0"}}><span onClick={enableEditMode}>{statusValue}</span></div>
        }
    </div>)
};

export default ProfileStatus;


// debugger;
// export default class ProfileStatus extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             editMode: false,
//             statusValue: '1111',
//         }
//     }
//
//     onChange = (e) => {
//         this.setState({statusValue: e.target.value})
//     };
//     enableEditMode = () => {
//         this.setState({editMode: true})
//     };
//     disableEditMode = (e) => {
//         this.setState({editMode: false})
//     };
//
//     render() {
//         return <div>
//             {this.state.editMode
//                 ? <div>
//                     STATUS: <TextField
//                         placeholder={"STATUS"}
//                         required
//                         fullWidth={true}
//                         autoFocus={true}
//                         onBlur={this.disableEditMode}
//                         value={this.state.statusValue}
//                         onChange={this.onChange}
//                         type="text"/>
//                 </div>
//                 : <div>STATUS: <span onClick={this.enableEditMode}>{this.state.statusValue}</span></div>
//             }
//         </div>
//     }
// }
