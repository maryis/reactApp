import React from 'react'
import TableView from "../base/TableView";
import { showAction} from "../redux/action-creators/callServer";
import {connect} from "react-redux";

class Report extends React.Component {

    constructor(props){
        super(props)
        document.title='گزارش از سرور'
    }

    componentDidMount() {
        this.props.onShow();
    }


    render() {
        return (
            <TableView list={this.props.data} >
            </TableView>
        )
    }
}

//if we need the list outside this page (not just its children), we should use redux and set list-state to list in a reducer

//return an object, each item of object indicates a function which can be used as props in this component
const mapDispatchToProps = dispatch => (
    {
        onShow: () => dispatch(showAction())

    }
);

//return an object, each item of object indicates a props
const mapStateToProps = state => (

    {
        data: state.callServer.data
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Report)