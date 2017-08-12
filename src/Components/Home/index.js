import React from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import Iframe from 'react-iframe'
const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];


class Home extends React.Component {
    componentDidMount() {
    }
   render() {
      return (
            <MuiThemeProvider>
            <div>
                <div className="container">
                <div className="columns is-desktop">
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                    <a>#css</a> <a>#responsive</a>
                                    <br/>
                                    <small>11:09 PM - 1 Jan 2016</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="tabs is-toggle">
                                    <ul>
                                        <li className="is-active">
                                            <a>
                                                <span className="icon is-small"><i className="fa fa-image"></i></span>
                                                <span>BUY</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <span className="icon is-small"><i className="fa fa-music"></i></span>
                                                <span>SELL</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <h5 className="title is-5">1 BTC = 105,298 THB</h5>
                                <div className="field">
                                    <label className="label">BTC ที่จะขาย</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Text input"/>
                                    </div>
                                    <p className="help">This is a help text</p>
                                </div>
                                <div className="field">
                                    <label className="label">จำนวน THB ที่คุณจะได้รับ</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Text input"/>
                                    </div>
                                    <p claclassNamess="help">This is a help text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                </div>
                <footer className="footer" style={{ backgroundColor: '#FFF'}}>
                    <div className="container">
                        <div className="content has-text-centered">
                            <p>
                                <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0
                                </a>
                            </p>
                            <p>
                                <a className="icon" href="https://github.com/jgthms/bulma">
                                    <i className="fa fa-github"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
            </MuiThemeProvider>
      )
   }
}

export default Home;
