import React, { Component } from 'react';
import {BrowserRouter, Link , Route} from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

import "./style.css"

class Routing extends Component {
    state = {  }
    render() { 
        return ( 
           <BrowserRouter>
            <div className="row animated fadeIn">
                <div className="col-md-6 offset-3" align="center">
               
                    <nav className="navbar  navbar-expand-lg  navbar-dark bg-dark">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                    <Link className="nav-link" to="/">Home </Link>
                            </li>
                            <li className="nav-item">
                                    <Link className="nav-link" to="/page1">Page1</Link>
                            </li>
                        
                            <li className="nav-item">
                                <Link className="nav-link" to="/page2">Page2</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/page3">Page3</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact render={()=> <Home /> } />
                    <Route path="/page1" exact render={()=> <Page1 /> }  />
                    <Route path="/page2" exact render={()=> <Page2 />} />
                    <Route path="/page3" exact render={()=> <Page3 />} />

                </div>
            </div>
           </BrowserRouter>

        );
    }
}
 
export default Routing;