import React, { Component } from 'react';
import './animeInfoDetails.scss';
import AnimeInfoDetail from './AnimeInfoDetail';

class AnimeInfoDetails extends Component {

    render() {

        let { alternativeTitles, information, statistics } = this.props.anime;

        return (
            <div className="anime-info-details-wrapper">
                {/* A ideia aqui é passar o objeto específico pra cada componente */}
                <AnimeInfoDetail {...alternativeTitles}/>
                <AnimeInfoDetail {...information}/>
                <AnimeInfoDetail {...statistics}/>
            </div>
        );
    }
}

export default AnimeInfoDetails;