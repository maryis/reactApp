import React from 'react'
import {delAction} from "../redux/action-creators/callServer";
import {connect} from "react-redux";

class TableView extends React.Component {

    delete = (e) => {
        console.log(e.target.value);

        this.props.onDelete(e.target.value);
    }

    render() {

        let child = (<div>nothing to show</div>);

        if (this.props.list.length > 0) {
            const titles = Object.keys(this.props.list[0]);
            titles.push("Action");

            child = (
                <div>
                    <table className="table table-hover table-bordered table-striped">
                        <thead className='table-dark'>
                        <tr>
                            {titles.map(title => {
                                return (
                                    <th key={title}> {title}</th>
                                )
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.list.map((item) => {

                                let cells = titles.map((title) => {
                                    if (title === "Action")
                                        return (
                                            <td key={item[titles[1]]}>
                                                <button className="btn btn-danger" onClick={this.delete}
                                                        value={item[titles[1]]}> delete
                                                </button>
                                            </td>
                                        )
                                    if (title === "completed" && item[title])
                                        return (
                                            <td> true</td>
                                        )
                                    if (title === "completed" && !item[title])
                                        return (
                                            <td> false</td>
                                        )

                                    return (
                                        <td > {item[title]}</td>
                                    )

                                });


                                return (
                                    <tr>{cells}</tr>
                                );
                            })}
                        </tbody>
                    </table>

                </div>

            );
        }
        return (
            child
        )
    }
}


//return an object, each item of object indicates a function which can be used as props in this component

const mapDispatchToProps = dispatch => (
    {
        onDelete: (id) => {
            dispatch(delAction(id))
        }

    }
);

//return an object, each item of object indicates a props
const mapStateToProps = state => (
    {
        data: state.callServer.data
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(TableView)