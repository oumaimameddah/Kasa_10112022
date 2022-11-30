import React, {PureComponent} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";

export default class KasaRouter extends PureComponent {
    render() {
        const { housingsData } = this.props
        return (
            <Router forceRefresh={true}>
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home housingsData={housingsData} />}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<div>404</div>}/>
                </Routes>
                <Footer/>
            </Router>
        )
    }
}