import React from 'react';
import { PureComponent } from 'react';
import logo from '../assets/logo-white.svg';
import '../styles/footer.style.css';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer>
                <img src={logo} alt="Logo Kasa" />
                <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
            </footer>
        );
    }
}