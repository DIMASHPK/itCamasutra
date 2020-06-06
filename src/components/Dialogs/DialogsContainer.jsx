import {
    addMessageActionCreater,
} from "../../redux/dialiogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { withAuthRedirectHOC} from "../hoc/AuthRedirect";
import {compose} from "redux";
import {reset} from "redux-form";

let mapStateToProps = ({
                           dialogs_reducer: {dialogsData, messages},
                       }) => ({dialogsData, messages});

let mapDispatchToProps = {
    addMessageActionCreater,
    reset
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirectHOC)(Dialogs);


