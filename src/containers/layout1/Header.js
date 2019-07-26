import React from 'react'
import {router_config} from "../../configs/route_config";
import {NavLink} from "react-router-dom";

export const Header = (props) =>
    (
        <div>
        <nav className='navbar navbar-expand-sm justify-content-center bg-light'>
            <ul className="navbar-nav">
            {
                router_config.map((item) => (

                    /* <Link key={item.title} to={item.path} > {item.title}</Link>*/
                    <NavLink key={item.title} to={item.path}><span> {item.title}  {item.splitter} &nbsp; </span></NavLink>

                //A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.

                ))
            }

            </ul>
            <label className='col-form-label text-success text-center'>  ---> Layout1</label>

        </nav>
        </div>
    );