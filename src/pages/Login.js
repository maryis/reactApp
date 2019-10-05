import React from 'react'


//we can use special input components to use their validation features:
//import { Radiobox,TextBox } from 'react-inputs-validation';
//or jsFiddle   or react-form-with-constraint libraries

//I implemented input-validation here by my own


class Login extends React.Component {

    constructor(props) {
        super(props)
        document.title = 'ورود'
    }

    state = {
        user : "",
        pass : "",
        errors: []
    }

    handleInput = (e) => {
        const {name, value} = e.target
       this.setState({
           [name]:value
       })

    }

    login = (e) => {
        e.preventDefault();


        let {user,pass} = this.state;
        let er = {}
        let isFormValid = true

        if (!this.validName(user)) {
            er['user'] = '**user**'  // or 'Only letters
            isFormValid = false
        }
        if (!pass) {
            er['pass'] = '**pass**'
            isFormValid = false
        }
        this.setState({
            errors: er
        })
        if (isFormValid) {  //should redirect to home page
            //this line works only if this Component is rendered based on Route
            //this.props.history.push('/report');

            //it does not work :(
            //return( <Redirect to='/report'/>);

            //it works, but does not show the page !
            window.location='http://localhost:3000/home';
        }

    }

    validName(name) {
        return name && name.match(/^[a-zA-Z]+$/)  //only letters
    }

    render() {
        return (
            <div>
                <div className='form-group form-inline'>
                    <label className='col-form-label w-25' htmlFor='user'>User</label>
                    <input className='form-control w-75' placeholder="username"
                           name='user' value={this.state.user} onChange={this.handleInput}></input>
                    <span className='text-danger'>{this.state.errors['user']} </span>
                </div>
                <div className='form-group form-inline'>
                    <label className='col-form-label w-25' htmlFor='pass'>Pass</label>
                    <input className='form-control w-75' placeholder="password"
                           name='pass' value={this.state.pass} onChange={this.handleInput}></input>
                    <span className='text-danger'>{this.state.errors['pass']} </span>

                </div>
                <button className='btn btn-info ' onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login