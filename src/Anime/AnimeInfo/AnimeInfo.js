import React, { Component } from 'react';
import './animeInfo.scss';
import AnimeInfoCover from './AnimeInfoCover';
import AnimeInfoDetails from './AnimeInfoDetails';

class AnimeInfo extends Component {
    render() {
        return (
            <div className="anime-info">
                <AnimeInfoCover {...this.props}/>
                <AnimeInfoDetails {...this.props}/>
            </div>
        );
    }
}

export default AnimeInfo;