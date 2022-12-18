import React from "react";
import { PureComponent } from 'react';
import {useParams} from "react-router-dom";
import Tag from './Tag';
import Gallery from "./Gallery";
import Collapse from './Collapse';
import Error from "./Error";
import star from '../assets/star.png';
import '../styles/housting.style.css';

function Housing(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class HousingComponent extends PureComponent {

    // Constructor
    constructor() {
        super();
        this.state = {
            housingsData: []
        }
    }

    // fetch data
    componentDidMount() {
        fetch(`${window.origin}/logements.json`)
            .then((res) => res.json())
            .then((vals) => this.setState({housingsData: vals}));
    }

    render() {
        window.scrollTo(0, 0);
        /** Get the id from path (params of the URL) */
        /** get all data */
        const { housingsData } = this.state;
        const { params } = this.props;
        const { id } = params;
        /** filter for the given id */
        const houseData = housingsData.filter((house) => {
            return house.id === id;
        });
        /** set the title of the page */
        const setTitle = (title) => {
            window.document.title = `Kasa - ${title}`;
        };
        /** Get the rating of the housing */
        const getRating = (rating) => {
            let arrayRating = [];
            for (let i = 1; i < 6; i++) {
                let starStyle;
                if (i > parseInt(rating)) starStyle = 'starGray';
                else starStyle = 'starRed';
                arrayRating.push(
                    <span key={i}>
                        <img
                            className={starStyle}
                            src={star}
                            alt="Note du logement"
                        />
                    </span>
                );
            }
            return arrayRating;
        };

        return (
            <main className="mainHousing">
                <section>
                    {houseData.length > 0 ? (
                        houseData.map((house) => (
                            <article key={house.id}>
                                {setTitle(house.title)}
                                <Gallery pictures={house.pictures} />
                                <h2>{house.title}</h2>
                                <h3>{house.location}</h3>
                                <div className="divTags">
                                    {house.tags.map((tag, index) => (
                                        <Tag
                                            key={index}
                                            tag={tag}
                                            index={index}
                                        />
                                    ))}
                                </div>
                                <div className="divRatingAndHost">
                                    <div className="divRating">
                                        {getRating(house.rating)}
                                    </div>
                                    <div className="divHost">
                                        <span>
                                            {house.host.name.split(' ')[0]}
                                            <br />
                                            {house.host.name.split(' ')[1]}
                                        </span>
                                        <img
                                            src={house.host.picture}
                                            alt={house.host.name}
                                        />
                                    </div>
                                </div>
                                <div className="divCollapse">
                                    <Collapse
                                        id={'description'}
                                        classElement={'divDescription'}
                                        title={'Description'}
                                        content={house.description}
                                    />
                                    <Collapse
                                        id={'equipements'}
                                        classElement={'divEquipements'}
                                        title={'Équipements'}
                                        content={house.equipments}
                                    />
                                </div>
                            </article>
                        ))
                    ) : (
                        <Error code="404" />
                    )}
                </section>
            </main>
        )
    }
}

export default Housing(HousingComponent);