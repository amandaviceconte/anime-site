import React, { Component } from 'react';
import AnimeInfo from './AnimeInfo/AnimeInfo';
import AnimeContent from './AnimeContent/AnimeContent';
import './anime.scss';

class Anime extends Component {
    
    render() {

        return(
            <div className="anime">
                <AnimeInfo {...this.props}/>
                <AnimeContent {...this.props}/>
            </div>
        );
    }
}

export default Anime;