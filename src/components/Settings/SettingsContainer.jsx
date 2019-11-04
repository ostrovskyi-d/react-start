import Settings from "./Settings";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export default compose (
    connect(),
    withAuthRedirect,
)(Settings);