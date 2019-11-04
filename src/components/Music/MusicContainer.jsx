import Music from "./Music";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export default compose(
    connect(),
    withAuthRedirect,
)(Music);