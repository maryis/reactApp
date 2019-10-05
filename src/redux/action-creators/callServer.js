import Axios from "axios/index";
import {SHOW} from "../action-types";


//use exactly in this way (all lines in return)
export const showAction = () => {
    return dispatch => {

        Axios({
            url: 'https://jsonplaceholder.typicode.com/todos'

        }).then(response => {
            console.log('call server')

            dispatch({
                type: SHOW,
                payload: {data: response.data}
            })

        }).catch(error => {
            console.log(error)
            dispatch({
                type: ''
            })
        });


    }
}
export const delAction = (id) => {
    return dispatch => {


        Axios({
            //the resource will not be really deleted on the server but it will be faked with status=200
            url: `https://jsonplaceholder.typicode.com/todos/${id}`,
            method: 'delete'

        }).then(response => {
            console.log("the row of " + id + " has been deleted(fake)")
            showAction();

        }).catch(error => {
            console.log(error)
            dispatch({
                type: ''
            })
        });


    }
}
export const saveAction = (compState) => {
    return dispatch => {

        let item = {userId: 1, ...compState}
        console.log(item)
        Axios({
            //the resource will not be really inserted on the server but it will be faked with status=200
            url: 'https://jsonplaceholder.typicode.com/todos',
            method: 'post',
            data: item

        }).then(response => {
            console.log("the row of " + response.data.id + " has been inserted(fake)")
            showAction();

        }).catch(error => {
            console.log(error)
            dispatch({
                type: ''
            })
        });


    }
}