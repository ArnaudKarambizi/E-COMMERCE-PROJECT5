import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage/ContactPage";
import ProductPage from "./components/ProductPage/ProductPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LogOut from "./components/LogOut";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import httpClient from "./components/httpClient";

export default class App extends Component {
  /* Initializing state  with an empty furnitures array 
    this will filled with  products data in the backend*/

  state = {
    selectValue: "default",
    inputValue: "",
    furnituresArray: [],
    furnitures: [],
    currentUser: httpClient.getCurrentUser()
  };

  //Fetching data from the node server

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    fetch(`/api/products`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          furnituresArray: data,
          furnitures: data
        });
      });
  };

  // UPDATING STATE

  selectFilter = e => {
    this.setState({
      selectValue: e.target.value
    });
  };

  searchOnChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let filterLink = `/api/products/productFilter/${this.state.inputValue}`;
    fetch(filterLink)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.length > 0) {
          this.setState({
            furnituresArray: data
          });
        }
      });
  };

  onLoginSuccess(user) {
    this.setState({ currentUser: httpClient.getCurrentUser() });
  }

  logOut() {
    httpClient.logOut();
    this.setState({ currentUser: null });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Router>
          <Header
            onSubmit={this.onSubmit}
            searchOnChange={this.searchOnChange}
            currentUser={currentUser}
          />
          <main className="main">
            <Route
              path="/contact"
              render={() => {
                return currentUser ? <ContactPage /> : <Redirect to="/login" />;
              }}
            />

            <Route
              path="/products"
              render={() => {
                return currentUser ? (
                  <ProductPage
                    // ******* passing state in  productPage component as props ***
                    furnituresArray={this.state.furnituresArray}
                    selectValue={this.state.selectValue}
                    selectFilter={this.selectFilter}
                    getProducts={this.getProducts}
                  />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />

            <Route
              path="/login"
              render={props => {
                return (
                  <LogIn
                    {...props}
                    onLoginSuccess={this.onLoginSuccess.bind(this)}
                  />
                );
              }}
            />

            <Route
              path="/logout"
              render={props => {
                return <LogOut onLogOut={this.logOut.bind(this)} />;
              }}
            />

            {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
            <Route
              path="/signup"
              render={props => {
                return (
                  <SignUp
                    {...props}
                    onSignUpSuccess={this.onLoginSuccess.bind(this)}
                  />
                );
              }}
            />

            <Route
              path="/"
              exact
              render={() => {
                return currentUser ? <Homepage /> : <Redirect to="/login" />;
              }}
            />
          </main>
          <Footer />
        </Router>
      </div>
    );
  }
}
