import React from 'react';
import { PureComponent } from 'react';
import homeImg from '../assets/home.png';
import '../styles/home.style.css';
import Thumb from "./Thumb";

export default class Home extends PureComponent {
    // Constructor
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    // fetch data
    componentDidMount() {
        fetch(`${window.origin}/logements.json`)
            .then((res) => res.json())
            .then((vals) => this.setState({data: vals}));
    }

    render() {
        const { data } = this.state;
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
                    <div>
                        {
                            data.map(({id, cover, title}) => (<Thumb key={id} id={id} cover={cover} title={title}/>))
                        }
                    </div>
                </section>
            </main>
        );
    }
};
