import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Notes from "./Notes";
import {connect} from "react-redux";

compose(withAuthRedirect, connect({},{}))(Notes);

