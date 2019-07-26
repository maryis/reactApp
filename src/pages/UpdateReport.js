import React from 'react'
import TableView from "../base/TableView";
import {saveAction, showAction} from "../redux/action-creators/callServer";
import {connect} from "react-redux";

class UpdateReport extends React.Component {
    constructor(props) {
        super(props)

        document.title = 'ورود داده'

        this.state = {
            //same names as !!!!!!!!name!!!!!!!! of form-inputs
            id: '',
            title: '',
            completed: false
        }
    }

    save = () => {
        this.props.onSave({
            id: this.state.id,
            title: this.state.title,
            completed: this.state.completed
        })
    }

    //use it whenever you have inputs.
    //if you need error handling for each input, use the structure of login component
    handleInputs = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    componentDidMount() {

        //no need to load data again here , because we have it in state
        if (this.props.data.length === 0)//the server report never called before
            this.props.onShow();
    }

    render() {

        return (
            //Wrap labels and form controls in <div class="form-group"> (needed for optimum spacing)
            // Add class .form-control to all textual <input>, <textarea>, and <select> elements
            <div className='align-content-lg-start'>
                <div className='form-group form-inline'>
                    <label className='col-form-label w-25 ' htmlFor='id'>id</label>
                    <input value={this.state.id} onChange={this.handleInputs} className='form-control w-75 ' name='id'/>
                </div>
                <div className='form-group form-inline'>
                    <label className='text-success w-25 ' htmlFor='id'>title</label>
                    <input value={this.state.title} onChange={this.handleInputs} className='form-control w-75 '
                           name='title'/>
                </div>
                <div className='form-check form-inline'>
                    <label className='text-success w-25 form-inline' htmlFor='completed'>completed</label>
                    <input checked={this.state.completed} onChange={this.handleInputs} type='checkbox' name='completed'
                           className='form-control '/>
                </div>
                <button className='btn btn-info' onClick={this.save}>Save</button>
                <br/><br/><br/>

                <TableView list={this.props.data}>
                </TableView>
            </div>
        )
    }

}

//zscds

//if we need the list outside this page (not just its children), we should use redux and set list-state to list in a reducer

//return an object, each item of object indicates a function which can be used as props in this component
const mapDispatchToProps = dispatch => (
    {
        onShow: () => dispatch(showAction()),
        onSave: (compSate) => dispatch(saveAction(compSate))
    }
);

//return an object, each item of object indicates a props
const mapStateToProps = state => (
    {
        data: state.callServer.data
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateReport)