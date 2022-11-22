import React from 'react';
import { PureComponent } from 'react';
import homeImg from '../assets/home.png';
import '../styles/home.style.css';

export default class Home extends PureComponent {
    render() {
        window.scrollTo(0, 0);
        window.document.title =
            'Kasa - leaders de la location d’appartements entre particuliers en France';
        return (
            <main className="mainHome">
                <section>
                    <article tabIndex="0">
                        <img src={homeImg} alt="Paysage de montagne" />
                        <h2>
                            Chez vous, <span>partout et ailleurs</span>
                        </h2>
                    </article>
                </section>
            </main>
        );
    }
};
