import React from 'react';
import { PureComponent } from 'react';
import homeImg from '../assets/home.png';
import '../styles/home.style.css';
import Error from "./Error";
import Thumb from "./Thumb";

export default class Home extends PureComponent {
    // Constructor
    constructor() {
        super();
        this.state = {
            loading: true,
            data: [],
        }
    }

    // fetch data
    componentDidMount() {
        fetch(`${window.origin}/logements.json`)
            .then((res) => res.json())
            .then((vals) => this.setState({data: vals}));
        setTimeout(() => {
            this.setState({loading: false})
        }, 3000);
    }

    render() {
        const { loading } = this.state;
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
                            data.length > 0 ?
                                (data.map(({id, cover, title}) => (<Thumb key={id} id={id} cover={cover} title={title}/>)))
                                : (<Error code="504"/>)
                        }
                    </div>
                </section>
            </main>
        );
    }
};
