import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppBar from 'material-ui/AppBar'

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import logo from '../../Images/logo.svg'
import './App.css'

class App extends Component {
    constructor(props) {
   super(props);
   this.state = {
     value: 3,
   };
 }
 handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <section className="hero is-primary is-medium">
                        <div className="hero-head">
                            <header className="nav">
                                <div className="container">
                                    <div className="nav-left">
                                        <a className="nav-item">
                                        </a>
                                    </div>
                                    <span className="nav-toggle">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                    <div className="nav-right nav-menu">
                                        <a className="nav-item is-active">
                                            Home
                                        </a>
                                        <a className="nav-item">
                                            Examples
                                        </a>
                                        <a className="nav-item">
                                            Documentation
                                        </a>
                                        <span className="nav-item">
                                            <a className="button is-primary is-inverted">
                                                <span>JOIN FOR FREE</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </header>
                        </div>
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <h1 className="title">
                                    Network Where Active Traders Exchange Ideas to Maximize Profit
                                </h1>
                                <h2 className="subtitle">
                                    The best charts on the web and a community of investors who are passionate about sharing trading ideas.
                                </h2>
                            </div>
                        </div>
                    </section>

                    <nav className="navbar has-shadow">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item">
                                    <span className="tag is-success">HIGH</span>
                                    <p style={{ marginLeft: '20', fontSize: '14'}}>120,386.25</p>
                                </a>
                                <a className="navbar-item" href="http://bulma.io">
                                    <span className="tag is-danger">LOW</span>
                                    <p style={{ marginLeft: '20', fontSize: '14'}}>120,386.25</p>
                                </a>
                                <a className="navbar-item" href="http://bulma.io">
                                    <span className="tag is-info">LASTEST</span>
                                    <p style={{ marginLeft: '20', fontSize: '14'}}>120,386.25</p>
                                </a>
                                <a className="navbar-item" href="http://bulma.io">
                                    <span className="tag is-warning">24HR VOL</span>
                                    <p style={{ marginLeft: '20', fontSize: '14'}}>120,386.25</p>
                                </a>
                                <div className="navbar-burger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </nav>
                    { this.props.children }
                    {
                        // <footer className="footer">
                        //     <div className="container">
                        //         <div className="content has-text-centered">
                        //             <p>
                        //                 <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                        //                 <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                        //                     is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0
                        //                 </a>
                        //             </p>
                        //             <p>
                        //                 <a className="icon" href="https://github.com/jgthms/bulma">
                        //                     <i className="fa fa-github"></i>
                        //                 </a>
                        //             </p>
                        //         </div>
                        //     </div>
                        // </footer>
                    }
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
