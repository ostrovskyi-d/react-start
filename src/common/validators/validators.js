import {loginThunkCreator} from "../../redux/auth-reducer";

export const validate = values => {
    const errors = {};
    if (!values.newPostBody) {
        errors.newPostBody = "Empty posts not allowed";
    } else if (!values.login) {
        errors.login = "Field is required"
    } else if (!values.password) {
        errors.password = "Field is required"
    }
    return errors;
};

export const warn = values => {
    const warnings = {};
    if (values.newPostBody && values.newPostBody.length < 300) {
        warnings.newPostBody = `(Symbols left: ${300 - values.newPostBody.length})`;
    } else if (values.password && values.password.length < 10) {
        warnings.password = `Password not secure`
    }
    return warnings;
};

