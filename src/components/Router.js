import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default class KasaRouter extends React.Component {
    render() {
        return (
            <Router forceRefresh={true}>
                <div>HEADER</div>
                <Routes>
                    <Route path="/home" element={<div>HOME</div>} exact/>
                    <Route path="/about" element={<div>ABOUT</div>} exact/>
                    <Route path="/" element={<div>404</div>}/>
                </Routes>
                <div>FOOTER</div>
            </Router>
        )
    }
}