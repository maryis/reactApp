import React from 'react'
import {Header} from "./Header";
import {NavigationBar} from "./NavigationBar";
import {Footer} from "./Footer";

class MasterPage extends React.Component {

    render() {
        return (
            <div className='container text-center' >
                <div className='row'>
                    <div className='col-md'>
                        <Header/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-2 h-100'>
                        <NavigationBar/>
                    </div>
                    <div className='col-md-10'>

                        <br/>
                        {this.props.children}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md'>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MasterPage;