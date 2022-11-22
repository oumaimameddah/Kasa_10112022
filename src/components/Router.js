import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

export default class KasaRouter extends React.Component {
    render() {
        return (
            <Router forceRefresh={true}>
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<div>ABOUT</div>}/>
                    <Route path="/" element={<div>404</div>}/>
                </Routes>
                <Footer/>
            </Router>
        )
    }
}