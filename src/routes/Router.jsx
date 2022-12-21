import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Housing from "../pages/Housting";

export default class KasaRouter extends PureComponent {
    render() {
        return (
            <Router forceRefresh={true}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
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

