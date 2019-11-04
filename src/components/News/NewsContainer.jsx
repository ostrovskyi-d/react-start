import News from "./News";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export default compose(withAuthRedirect, connect())(News);

