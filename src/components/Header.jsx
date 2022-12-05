import React from 'react';
import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/header.style.css';

export default class Header extends PureComponent {
    render() {
        return (
            <nav className="navHeader">
                <ul>
                    <li>
                        <NavLink exact="true" to="/home">
                            <img src={logo} alt="Logo Kasa" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/home">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/about">
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}