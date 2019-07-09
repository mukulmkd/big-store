import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ height: "75vh" }} className="container valign-wrapper">
                    <div className="row">
                        <div className="col s12 center-align">
                            <div className="logo col s12">
                                <h1 style={{
                                    fontFamily: 'Segoe UI',
                                    fontSize: '3em',
                                    color: '#000',
                                    display: 'inline - block',
                                    position: 'relative'
                                }}>
                                    <b style={{
                                        fontSize: '35px',
                                        background: '#ED0612',
                                        fontWeight: 'normal',
                                        padding: '0',
                                        display: 'inline-block',
                                        position: 'absolute',
                                        top: '0',
                                        left: '110px',
                                        color: '#fff'
                                    }}>THE Big Store</b>
                                    <br />
                                    <span>The Best Supermarket</span>
                                </h1>
                            </div>
                            <br />
                            <div className="col s6">
                                <Link
                                    to="/register"
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                    }}
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Register
              </Link>
                            </div>
                            <div className="col s6">
                                <Link
                                    to="/login"
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                    }}
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Log In
              </Link>
                            </div>
                        </div>
                    </div>
                </div >
            </React.Fragment>
        );
    }
}
export default Landing;