import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import Housing from "./Housting";

export default class KasaRouter extends PureComponent {
    render() {
        return (
            <Router forceRefresh={true}>
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/housing/:id" exact="true" element={<Housing />}/>
                    <Route path='*' exact="true" element={<Error code="404"/>}/>
                </Routes>
                <Footer/>
            </Router>
        )
    }
}

