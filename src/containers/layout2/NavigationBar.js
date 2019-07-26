import React from 'react'
import {router_config} from "../../configs/route_config";
import {NavLink} from "react-router-dom";

export const NavigationBar = (props) =>
    (
        <nav className='navbar align-content-lg-start bg-dark '>
            <ul className="navbar-nav">
            {
                router_config.map((item) => (

                    /* <Link key={item.title} to={item.path} > {item.title}</Link>*/
                    <NavLink key={item.title} to={item.path}> {item.title}</NavLink>
                    //A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.

                ))
            }
            </ul>
        </nav>
    );