// import React, { Profiler } from 'react';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import profile from './Profile'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BestBooks from "./BestBooks";
import Profile from "./Profile";
// import Login from './Login';
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  loginHandler = (user) => {
    this.setState({
      user,
    });
  };
  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };
  render() {
    const { isAuthenticated} = this.props.auth0;
    // console.log(this.props);
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* <BestBooks /> */}
              {/* TODO(Done): if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {/* {this.state.user ? <BestBooks /> : <Login onLoginSubmit={this.loginHandler} handleFormInput={this.formInputHandler} />} */}

              {isAuthenticated && <BestBooks />}
              

              {/* {this.state.user  && <BestBooks />} */}
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            {/* TODO(Done): add a route with a path of '/profile' that renders a `Profile` component */}
            {/* <Route path="/profile">
            {this.state.user ? <Profile user={this.state.user} /> : <h3>No Profile Found </h3>} */}
            {/* </Route> */}
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
export default withAuth0(App);
