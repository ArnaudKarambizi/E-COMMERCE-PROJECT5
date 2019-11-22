import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage/ContactPage";
import ProductPage from "./components/ProductPage/ProductPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
    /* Initializing state  with an empty furnitures array 
    this will filled with  products data in the backend*/

    state = {
        selectValue: "default",
        inputValue: "",
        furnituresArray: [],
        furnitures: []
    };

    //Fetching data from the node server

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        fetch(`/products`)
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
        let filterLink = `products/productFilter/${this.state.inputValue}`;
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

    render() {
        return (
            <Router>
                <Header
                    onSubmit={this.onSubmit}
                    searchOnChange={this.searchOnChange}
                />
                <main className="main">
                    <Route path="/" exact component={Homepage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route
                        path="/products"
                        component={() => (
                            <ProductPage
                                // ******* passing state in  productPage component as props ***
                                furnituresArray={this.state.furnituresArray}
                                selectValue={this.state.selectValue}
                                selectFilter={this.selectFilter}
                                getProducts={this.getProducts}
                            />
                        )}
                    />
                </main>
                <Footer />
            </Router>
        );
    }
}
